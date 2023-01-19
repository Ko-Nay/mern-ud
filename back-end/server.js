// by ES6 JS
// import express from 'express';
// import notFoundMiddleware from './middleware/not-found-middle/notFoundMiddle';

/** by Common JS */
const express = require('express');

/* need to config dotenv*/
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/connectDB');
const notFoundMiddleware = require('./middleware/not-found-middle/notFoundMiddle.js');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3500;
connectDB();

app.get('/', (req, res) => {
  res.send('Welocme to MERN stack!');
});

// app.all('*', (req, res) => {
//   res.status(404).send('Page Not Found!');
// });

/* for invalid routes: client mistakes */
app.all('*', notFoundMiddleware);

/* for server errors */
app.use(errorHandler);

mongoose.connection.once('open', () => {
  console.log('Connected to the DB...');
  app.listen(port, () => console.log(`Server is running on ${port}`));
});
