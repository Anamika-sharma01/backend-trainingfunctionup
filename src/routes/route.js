let obj1 = require("../logger/logger.js");
let obj2 = require("../utils/helper.js");
let obj3 = require("../problem no.4/chunk");
let obj4 = require("../problem no.4/tail");
let obj5 = require("../problem no.4/union");
let obj6 = require("../problem no.4/frompair");
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    obj1.welcome("Welcome to my application.i am anamika sharma and a part of FunctionUp plutonium cohort.");
    obj2.printDate("Today is 07th aug");
    obj2.printMonth("Month is august");
    obj2.getBatchInfo("plutonium, W3D6, the topic for today is Nodejs module system");
    console.log(obj1.endpoint1);
    console.log(obj2.endpoint2);
    res.send('Welcome to my application');
});

router.get('/hello', function (req, res){
    console.log(obj3.month);
    console.log(obj4.myArray);
    console.log(obj5.myArray2);
    console.log(obj6.myArray3);
    res.send('problem no.4 succesfully executed!!');
});
module.exports = router;