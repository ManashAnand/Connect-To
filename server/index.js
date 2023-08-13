const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

const http = require('http');


// dotenv configuration
dotenv.config();

// middleware
app.use(express.json());
app.use(cors({
    origin: '*', // Replace with your frontend domain
    credentials: true
  }));


// Universal constant
const PORT = process.env.PORT || 4000;

// Routes
const authRoute = require('./router/authRoute');
const postRoute = require('./router/postRoute');

// Modals
// const UserModel = require('./models/userModal');





app.use('/uploads', express.static(__dirname + '/uploads'))
app.use('/post-uploads', express.static(__dirname + '/post-uploads'))
const url = process.env.MONGO_URL;

// sepearate thing to connect to database
mongoose.connect(url,{
    useNewUrlParser: true
}).then(() => {
    console.log("Connected to database");
}).catch((err) => {
    console.log(err);
})

app.get('/',(req,res) => {
    try {
        res.json("Working")
        
    } catch (error) {
        console.log(error)
    }
})

app.use('/',authRoute);
app.use('/post',postRoute);



app.listen(4000,() => {
    console.log("Database connected at port "+PORT);
});