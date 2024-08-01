const Usermodel = require("../models/user") 

exports.create = (req, res) => {
    const { firstname, lastname, email, pass } = req.body;
  
    const newuser = new Usermodel({
      firstname: firstname,
      lastname: lastname,
      email: email,
      pass: pass
    });
  
    newuser.save().then(() => {
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

