const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title required'],
    // minlength: [10, 'title length should be at least 10'],
    // unique: true,
  },
  price: {
    type: Number,
    required: [true, 'price field required'],
  },
  quantity: {
    type: Number,
  },
  image: {
    type: String,
    required: [true, 'image field required'],
    unique: true,
  },
  type: {
    type: String,
    // required: [true, 'types of meal is required'],
  },
});

const orderSchema = new mongoose.Schema({
  items: [mealSchema],
  totalAmount: Number,
  totalQuantity: Number,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
