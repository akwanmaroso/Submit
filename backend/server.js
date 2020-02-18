const express = require('express');
// const helmet = require('helmet');
const app = express();
// const dotenv = require('dotenv');
const morgan = require('morgan');
require('dotenv').config();
require('./db/index');

app.use(morgan('tiny'));
// app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const routes = require('./routes/route')
app.use('/api/', routes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

