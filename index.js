const express = require('express');
const server = express();
const config = require('./config/dev');


const mongoose = require('mongoose');
const FakeDB = require('./populate/FakeDB');

mongoose.connect(
	config.DB_URI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (err) {
			console.error(err);
		} else {
      FakeDB.populate()
			console.log('Connected to DB!');
		}
	}
);

server.use('/api/v1/portfolios', require('./routes/portfolios'));
