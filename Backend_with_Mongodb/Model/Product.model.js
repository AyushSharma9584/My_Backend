const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Userinfo'

    },
    userEmail: {
        type: String
    },
    productName: {
        type: String
    },
    productDescription: {
        type: String,
        trim: true
    },
    productPrice: {
        type: Number
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);