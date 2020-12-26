const express = require('express')
const router = express.Router()
const mongoose = require("mongoose")
const postSchema = mongoose.model("postSchema")
const Middlewear=require('../authMiddleweare')

router.post('/create_post',Middlewear,(req,res)=>{
const {title,body}=req.body
if(title&&body){
    console.log(req.user)
const post=new postSchema({
    Title:title,
    Body:body,
    // PostedBy:req.user
})
post.save()
res.json({status:"post send"})
}
})

module.exports=router

