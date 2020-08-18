const express = require('express');

//express app
const app = express();

const mongoose = require('mongoose');

//add dotenv for reading env variables from the .env file
require('dotenv').config();

//set a static folder
app.use(express.static('public'));

//import routes
const routes = require('./routes/routes');

//mongo db connection string
const dbURI = process.env.DB_URI;

//for easier parsing of data passed to server
app.use(express.urlencoded({
    extended: true
}));

/* Connect to the database via mongoose. Returns a promise
{ useNewUrlParser: true, useUnifiedTopology: true } disables a mondlo deprecationWarning */

mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));

//make ejs the view engine to be used
app.set('view engine', 'ejs');

const port = 3000;

//listen for requests
app.listen(port);

app.use('/', routes);