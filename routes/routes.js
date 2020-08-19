const express = require('express');

const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.index);
router.get('/view', controller.view);
router.get('/add', controller.add);
router.post('/add_cart', controller.add_cart);

module.exports = router;