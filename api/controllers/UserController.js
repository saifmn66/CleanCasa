const Usermodel = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.create = async (req, res) => {
    const { firstname, lastname, email, pass } = req.body;
    
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pass, salt);

        const newuser = new Usermodel({
            firstname: firstname,
            lastname: lastname,
            email: email,
            pass: hashedPassword
        });

        await newuser.save();

        res.status(200).send({
            message: 'Successfully created user!'
        });
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message: 'Error creating user',
            error: err.message
        });
    }
};


exports.check = async (req, res) => {
  const { email, pass } = req.body;

  const user = await Usermodel.findOne({ email });

  if (!user) {
      return res.json({ message: "Email doesn't exist!" });
  }

  const isPassValid = await bcrypt.compare(pass, user.pass);
  
  if (!isPassValid) {
      return res.json({ message: "Username or password is not correct" });
  }

  const token = jwt.sign({ id: user._id , role: user.role }, "jrima");

  return res.json({ token, userID: user._id });
};
