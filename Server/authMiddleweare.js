const jwt = require('jsonwebtoken');
const {JWT_SECRET}=require('./Key/key')
const mongoose=require("mongoose")
const userSingUpSchema=mongoose.model("UserSingUpSchema")
module.exports = (req, res, next) => {
    // console.log(req.headers,"kkkkkkkkkkkkkkkkkkkkkkkkkkk")
    const { authorization } = req.headers

    if (authorization) {
        jwt.verify(authorization, JWT_SECRET, function (err, payload) {
            // console.log(payload,err,"paaaaaaaaaaay")
            userSingUpSchema.findById(payload._id).then((validUser) => {
                req.user = validUser
                next()
            })

        })
    }
    else {
        res.json({ status: "authentication failed" })
        next()
    }
}