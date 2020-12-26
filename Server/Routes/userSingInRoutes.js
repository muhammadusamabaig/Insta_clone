const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const userSingUpSchema = mongoose.model("UserSingUpSchema")
const bcrypt = require('bcrypt');
const {JWT_SECRET}=require('../Key/key')
const jwt = require('jsonwebtoken');


router.post('/login',(req, res) => {
    const { gmail, password } = req.body

    userSingUpSchema.findOne({ Gmail: gmail }).then((isExist) => {
        console.log(isExist)
        bcrypt.compare(password,isExist.password,(result)=>{
            if(result){
            // console.log(isExist)
                const token=jwt.sign({_id:isExist._id},JWT_SECRET)
                res.json({token,isExist})
            }
        })
    })
})
// router.post('/protected',Middlewear,(req, res) => {
//     res.json({status:req.user})
// })
module.exports = router