const express = require('express');
const Router = express.Router();

const AppointmentController = require('../controllers/AppointmentController');

Router.post("/addapp" , AppointmentController.create);


module.exports = Router ;

