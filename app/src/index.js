'use strict';

// 3rd-party dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Application config
const LOCAL_APP_PORT = 8080;
const PUBLIC_APP_PORT = process.env.PUBLIC_APP_PORT || LOCAL_APP_PORT;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;

// Sanity check for debugging
console.log("local app port:", LOCAL_APP_PORT);
console.log("public app port:", PUBLIC_APP_PORT);
console.log("mongo host:", MONGO_HOST);
console.log("mongo port:", MONGO_PORT);

// MongoDB connection
const MONGO_URL = 'mongodb://' + MONGO_HOST +  ':' + MONGO_PORT + '/dev';
global.db = mongoose.createConnection(MONGO_URL);

// Express middleware
app.use(bodyParser.json()); // for parsing application/json

// Import controllers (routes)
const home = require('./controllers/home');
const projects = require('./controllers/projects');

// Set up express routes
app.use('/', home);
app.use('/projects', projects);

app.listen(LOCAL_APP_PORT, function() {
  console.log('Listening on http://localhost:' + PUBLIC_APP_PORT);
});
