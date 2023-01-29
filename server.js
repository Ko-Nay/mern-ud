/** by Common JS */
const express = require('express');

/* need to config dotenv*/
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
// const cors = require('cors');
const connectDB = require('./config/connectDB');
const notFoundMiddleWare = require('./middleware/not-found-middle/notFoundMiddleware');
const errorHandler = require('./middleware/errorHandler');
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');

const app = express();
const port = process.env.PORT || 3500;
connectDB();

/* we will pass data from req.body of POST as json data */
// app.use(cors());
app.use(express.json());

/* ROUTES */
app.get('/', require('./routes/rootRoutes'));
app.get('/api/v1', (req, res) => {
  res.json({ msg: 'API' });
});

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use('/api/v1/auth', require('./routes/authRoutes'));
app.use('/api/v1/job', require('./routes/jobRoutes'));

/* for server errors */
app.use(notFoundMiddleWare);
app.use(errorHandler);

mongoose.connection.once('open', () => {
  console.log('Connected to the DB...');
  app.listen(port, () => console.log(`Server is running on ${port}`));
});
