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

mongoose.connect('mongodb://localhost:27017/CleanCasa', {
  useNewUrlParser: true,
  useUnifiedTopology: true 
}).catch(error => console.error('Error connecting to MongoDB:', error))

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function() {
  console.log('db connected successfully') 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(express.static(path.join(__dirname, '../CleanCasa/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../CleanCasa/dist', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});