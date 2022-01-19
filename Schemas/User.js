const mongoose = require("mongoose")

const User = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    uid: String,
    password: String
})


const UserModel = mongoose.model("User", User)

module.exports = UserModel;