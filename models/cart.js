//model of Neo Geo MVS cart
//title, serial#, location,
//orignal label, orignal shell
//photo(s), notes, date added

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    notes: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;