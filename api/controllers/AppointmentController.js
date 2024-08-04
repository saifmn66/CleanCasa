const AppointmentModel = require("../models/apoitment") 

exports.create = (req, res) => {
    const { name, email, adresse , phone, date, message  } = req.body;
  
    const newapponitment = new AppointmentModel({
      name: name,
      email: email,
      adresse: adresse,
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


  exports.aff = (req, res) => {
    AppointmentModel.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: 'Error fetching data' });
      });
  };

  exports.delete = (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters
  
    AppointmentModel.findByIdAndDelete(id)
      .then((deletedAppointment) => {
        if (deletedAppointment) {
          res.status(200).send({
            message: 'Appointment successfully deleted!',
          });
        } else {
          res.status(404).send({
            message: 'Appointment not found',
          });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: 'Error deleting appointment',
          error: err.message,
        });
      });
  };