const mongoose = require('mongoose');
const dotenv = require('dotenv');
process.on('uncaughtException', (err) => {
  //shutting down gracefully
  console.log('uncaughtException', err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const connectDB = async () => {
  await mongoose.connect(process.env.URI);
  console.log('DB connected');
};

try {
  connectDB();
} catch (error) {
  console.log(error);
}

const app = require('./app');

const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}....`);
});

process.on('unhandledRejection', (err) => {
  console.log('unhandledRejection', err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
