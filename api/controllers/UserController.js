require('dotenv').config();
const Usermodel = require("../models/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.create = async (req, res) => {
    const { firstname, lastname, email, pass } = req.body;

    if (!firstname || !lastname || !email || !pass) {
        return res.status(400).json({ message: 'All fields are required' });
    }

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

        res.status(201).json({
            message: 'Successfully created user!'
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Error creating user',
            error: err.message
        });
    }
};

exports.check = async (req, res) => {
    const { email, pass } = req.body;

    if (!email || !pass) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        const user = await Usermodel.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "Email doesn't exist!" });
        }

        const isPassValid = await bcrypt.compare(pass, user.pass);

        if (!isPassValid) {
            return res.status(400).json({ message: "Username or password is not correct" });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);

        return res.status(200).json({ token, userID: user._id });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Error during authentication',
            error: err.message
        });
    }
};
