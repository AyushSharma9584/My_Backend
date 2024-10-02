const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    gender: {
        type: String,
        default: " "
    },
    phone_no: {
        type: Number
    },
    address: {
        type: String
    },
    password: {
        type: String
    }

})

module.exports = mongoose.model('Userinfo', UserSchema)