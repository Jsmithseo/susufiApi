const express = require('express');
const server = express();
const config = require('./config/dev');

const mongoose = require('mongoose');
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, (err) => {
  if (err) { console.error(err); }
  else {
    console.log('Connected to DB!');
  }
})

server.use('/api/v1/portfolios', require('./routes/portfolios'));