const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title required'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'price required'],
  },
  quantity: {
    type: Number,
  },
  image: {
    type: String,
    required: [true, 'image required'],
    unique: true,
  },
  type: {
    type: String,
    required: [true, 'types required'],
  },
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;
