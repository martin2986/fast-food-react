const Meal = require('../models/mealsModels');
const catchAsync = require('../utils/catchAsync');

exports.getAllMeals = catchAsync(async (req, res) => {
  const meals = await Meal.find();
  res.status(200).json({
    status: 'success',
    data: meals,
  });
});

exports.createMeals = catchAsync(async (req, res) => {
  const newMeal = await Meal.create(req.body);
  res.status(201).json({
    status: 'success',
    data: newMeal,
  });
});
