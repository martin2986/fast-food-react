const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const AppError = require('./utils/appError');
const ErrorController = require('./controllers/errorController');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = express();

const mealRouter = require('./routes/mealRoutes');
const cartRouter = require('./routes/cartRoutes');
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

app.use(cors());

app.use('/api/meals', mealRouter);
app.use('/api/cart', cartRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl}. on this server`, 404));
});

app.use(ErrorController);

module.exports = app;
