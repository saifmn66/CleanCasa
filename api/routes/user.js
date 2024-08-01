const express = require('express');
const Router = express.Router();

const UserController = require('../controllers/UserController');

Router.post("/adduser" , UserController.create);


module.exports = Router ;


