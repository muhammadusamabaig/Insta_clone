const mongoose = require('mongoose')

const UserSingUpSchema = mongoose.Schema({
    Name: {
        type: "String",
        require: true
    },
    Password: {
        type: "String",
        require: true
    },
    Gmail: {
        type: "String",
        require: true
    },
})
mongoose.model("UserSingUpSchema", UserSingUpSchema)