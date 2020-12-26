const express=require('express')
const app=express()
const {mongouri}=require('./Key/key')
const mongoose=require('mongoose')
require('./schemas/UserSingUpSchema')
require('./schemas/postSchema')

mongoose.connect(mongouri,
    
        { useNewUrlParser: true,
             useUnifiedTopology: true 
        }

    )

mongoose.connection.on('connected',()=>{
    console.log("mongoose connected")})

mongoose.connection.on('error',()=>{console.log("mongoose error")})
app.use(express.json())

app.use(require('./Routes/userSingUpRoutes'))
app.use(require('./Routes/userSingInRoutes'))
app.use(require('./Routes/postRoutes'))


app.listen('5000',()=>{
    console.log('starting node server')
})