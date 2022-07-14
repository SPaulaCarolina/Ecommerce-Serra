const mongoose = require('mongoose');

const typeCart = mongoose.model(
    'Cart', 
    new mongoose.Schema({
        products: [{ type: String }],
        createdAt: Date
    })
);

module.exports = typeCart;