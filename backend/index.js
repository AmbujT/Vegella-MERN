const express = require('express')
const app = express()
const port = 5000
const mongodb = require("./db")
mongodb()
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
// app.use('/api', require("./Routes/OrderData"));

app.get('/', (req,res)=>{
  res.send('Hello World')
})



app.listen(port, ()=>{
  console.log(`Server Running on port ${port}`)
})

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 5000;

// // MongoDB connection setup
// mongoose.connect('mongodb+srv://moneyibm7:money4ibm@cluster0.cgihkiq.mongodb.net/?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Middleware setup
// app.use(bodyParser.json());

// // Define a schema and model for the data
// const userSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

// // Endpoint to handle form data
// app.post('/Auth/signup', async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;
    
//     // Create a new user
//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password,
//     });

//     // Save the user to the database
//     await newUser.save();

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
