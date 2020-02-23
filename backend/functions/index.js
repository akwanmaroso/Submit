const functions = require('firebase-functions');

const express = require('express');
// const helmet = require('helmet');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
require('./db/index');
app.use(cors());
app.use(morgan('tiny'));
// app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routes = require('./routes/route')
app.use('/api/', routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

exports.app = functions.https.onRequest(app);
