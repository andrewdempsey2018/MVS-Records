//create an instance of the cart model
const Cart = require('../models/cart');

const index = (req, res) => {
    res.render('index');
}

//const view = (req, res) => {
//    res.render('view');
//}

const view = (req, res) => {
    Cart.find().sort({
            createdAt: -1
        })
        .then((result) => {
            res.render('view', {
                carts: result
            });
        })
        .catch((err) => {
            console.log(err);
        })
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

const single = (req, res) => {
    const id = req.params.id;
    Cart.findById(id)
        .then(result => {
            res.render('single', {
                cart: result
            });
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
    single,
}