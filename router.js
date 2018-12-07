const express = require('express');
const routeTo = express.Router();

let gplacemap = require('./gplacemap.js');
let placemod = new gplacemap(this);

routeTo.get('/placeDetailsByNumber/:contactno',placemod.getPlaceDetailsByContactNo);

routeTo.get('/placeDetailsByArea/:placename',placemod.getPlaceDetailsByArea);

routeTo.get('/viewDemo',placemod.getInitDetails);

module.exports = routeTo;