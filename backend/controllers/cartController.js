const Order = require('../models/cartModels');
const catchAsync = require('../utils/catchAsync');

exports.getOrder = catchAsync(async (req, res) => {
  const orders = await Order.find();
  res.status(200).json({
    status: 'success',
    data: orders,
  });
});

exports.createOrder = catchAsync(async (req, res) => {
  console.log(req.body);
  const order = await Order.create(req.body);
  res.status(201).json({
    status: 'success',
    data: order,
  });
});
