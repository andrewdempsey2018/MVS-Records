//create an instance of the cart model
const Cart = require('../models/cart');

const index = (req, res) => {
    res.render('index');
}

const view = (req, res) => {
    res.render('view');
}

const add = (req, res) => {
    res.render('add');
}

const add_cart = (req, res) => {
    cart = new Cart(req.body);

    cart.save()
        .then((response) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    index,
    view,
    add,
    add_cart,
}