const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    emailVerified: {
        type: Boolean,
        default: false
    },
    phoneVerified: {
        type: Boolean,
        default: false
    },
    address: {
        type: String
    },
    pin: {
        type: String
    },
    orders: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        },
        qty: {
            type: Number
        }
    }]
});

const User = mongoose.model('user', userSchema);
module.exports = User;