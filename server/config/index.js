require('dotenv').config();

const config = {
  port: process.env.PORT || 3001,
  password: process.env.PASSWORD,
  user: process.env.USER,
};

module.exports = { config };


