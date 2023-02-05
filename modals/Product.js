const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    thumbnail: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }],
    price: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true,
        default: true
    }
});

const Product = mongoose.model('product', productSchema);
module.exports = Product;