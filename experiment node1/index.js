const express = require('express');  //node js framework
const bodyParser = require('body-parser');

const route = require('./routes/route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // key - value pair

app.use('/', route);  // route handler

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});