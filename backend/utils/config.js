require('dotenv').config();

const { PORT } = process.env;

const MONGODB_URI = process.env.NODE_ENV === 'test'
  ? process.env.TEST_URI
  : process.env.URI;

module.exports = {
  MONGODB_URI,
  PORT,
};
