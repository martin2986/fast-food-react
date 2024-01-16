const Meal = require('../models/mealsModels');

exports.getAllMeals = async (req, res) => {
  const meals = await Meal.find();
  try {
    res.status(200).json({
      status: 'success',
      data: meals,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error,
    });
  }
};

exports.createMeals = async (req, res) => {
  try {
    const newMeal = await Meal.create(req.body);
    res.status(201).json({
      status: 'success',
      data: newMeal,
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: error,
    });
  }
};
