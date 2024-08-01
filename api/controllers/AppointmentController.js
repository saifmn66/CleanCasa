const AppointmentModel = require("../models/apoitment") 

exports.create = (req, res) => {
    const { name, email, phone, date, message } = req.body;
  
    const newapponitment = new AppointmentModel({
      name: name,
      email: email,
      phone: phone,
      date: date,
      message: message
    });
  
    newapponitment.save().then(() => {
      res.status(200).send({
        message: 'successfully created user!'
      });
    }).catch(err => {
      console.log(err);
      res.status(500).send({
        message: 'Error creating user',
        error: err.message
      });
    });
  };