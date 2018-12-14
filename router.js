const express = require('express');
const routeTo = express.Router();

let gplacemap = require('./gplacemap.js'),
    dbapi = require('./dbapi.js');
let placemod = new gplacemap(this),
    apidata = new dbapi(this);

routeTo.get('/placeDetailsByNumber/:contactno',placemod.getPlaceDetailsByContactNo);

routeTo.get('/placeDetailsByArea/:placename',placemod.getPlaceDetailsByArea);

routeTo.get('/viewDemo',placemod.getInitDetails);

routeTo.get('/getMongoData',apidata.dbConnectTo);

module.exports = routeTo;