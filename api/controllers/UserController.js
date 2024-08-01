const Usermodel = require("../models/user");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

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


  exports.check = async(req, res) => {
    const { email, pass } = req.body;
  
    const user = await Usermodel.findOne({email})
    !user && res.json({message: "admin dosent exist !"})

    const IsPassValid = await bcrypt.compare(pass , user.pass);
    !IsPassValid && res.json({messsage: "user name or password is not correct"})

    const token = jwt.sign({id: user._id} , "jrima")

    return res.json({token , adminID: admin._id})

  };