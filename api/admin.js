// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const Usermodel = require('./models/user'); // Adjust the path if necessary

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/CleanCasa', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// const createAdminUser = async () => {
//   const hashedPassword = await bcrypt.hash('jrima123456', 10); // Replace with a secure password
//   const adminUser = new Usermodel({
//     firstname: 'jrima', // Replace with the admin's first name
//     lastname: 'hamdi',   // Replace with the admin's last name
//     email: 'jrima@jrima.jrima',  // Replace with the admin's email
//     pass: hashedPassword,
//     role: 'admin'
//   });

//   try {
//     await adminUser.save();
//     console.log('Admin user created successfully');
//   } catch (error) {
//     console.error('Error creating admin user:', error);
//   } finally {
//     mongoose.connection.close();
//   }
// };

// createAdminUser();
