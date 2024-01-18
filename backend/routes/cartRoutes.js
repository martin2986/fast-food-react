const express = require('express');
const cartController = require('../controllers/cartController');
const router = express.Router();

const { getOrder, createOrder } = cartController;

router.route('/').get(getOrder).post(createOrder).put(createOrder);

module.exports = router;
