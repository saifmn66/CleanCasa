const express = require('express');
const Router = express.Router();

const AppointmentController = require('../controllers/AppointmentController');

Router.post("/addapp" , AppointmentController.create);
Router.get("/fetch" , AppointmentController.aff);


module.exports = Router ;

