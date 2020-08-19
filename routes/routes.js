const express = require('express');

const router = express.Router();

const controller = require('../controllers/controller');

router.get('/', controller.index);
router.get('/view', controller.view);
router.get('/add', controller.add);

module.exports = router;