//Creacion de modelos 
const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    product: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    mark: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    dateCreate: {
        type: Date,
        default: Date.now()
    }
})
module.exports = mongoose.model('Product', ProductSchema);