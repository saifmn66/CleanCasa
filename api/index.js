require('dotenv').config();
const express = require('express') ;
const mongoose = require('mongoose') ;
const path = require('path');
const app = express() ;
const port = 3000 ;
const cors = require('cors');


app.use(cors());
app.use(express.json())
const UserRoute = require("./routes/user");
const AppiontmentRoute = require("./routes/appointment");
app.use('/signup' , UserRoute);
app.use('/appointment' , AppiontmentRoute);


// Replace <password> with your database user's password and <dbname> with your database name
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

