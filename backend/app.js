const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = express();

const mealRouter = require('./routes/mealRoutes');

app.use(express.json());

app.use(cors());

app.use('/api/meals', mealRouter);

module.exports = app;
