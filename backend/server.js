const mongoose = require('mongoose');
const dotenv = require('dotenv');

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
