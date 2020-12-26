const express=require('express')
const router=express.Router()
const mongoose=require("mongoose")
const userSingUpSchema=mongoose.model("UserSingUpSchema")
const bcrypt = require('bcrypt');
const saltRounds = 10;
router.post('/singup',(req,res)=>{
    const { username, password, gmail } = req.body
    console.log(gmail,"oojoiiojjikj")
    if (!username || !gmail || !password) {
        return(res.json({ status: "please add all Fields" }))

    } else {
        userSingUpSchema.findOne({ Gmail: gmail }).then((saveUser) => {
            if (saveUser) {
                console.log(saveUser)
                return(res.json({ status: "already exist" })
                )
            } else {
                bcrypt.hash(password, saltRounds).then((hash) => {
                    console.log(hash)
                    if (hash) {
                        const userSave = new userSingUpSchema({
                            Name: username,
                            Password: hash,
                            Gmail: gmail
                        })
                        userSave.save()
return(res.json({ "status": "SingUp SucessFully" }))
                    }
                })


            }
        })
    }


})



module.exports = router