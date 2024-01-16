const express = require('express');
const mealController = require('../controllers/mealController');
const router = express.Router();

const { getAllMeals, createMeals } = mealController;

router.route('/').get(getAllMeals).post(createMeals);

module.exports = router;
