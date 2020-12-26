const mongoose = require('mongoose')
const {ObjectId}=mongoose.Schema.Types
const postSchema = mongoose.Schema({
    Title: {
        type: "String",
        require: true
    },
    Body: {
        type: "String",
        require: true
    },
    PostedBy: {
        type: ObjectId,
        ref:"UserSingUpSchema"
    },
})
mongoose.model("postSchema", postSchema)