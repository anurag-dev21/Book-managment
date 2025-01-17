require('dotenv').config;
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1/BookApp");

const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

// authentication
const authRoute = require('./routes/authRoutes');
app.use('/api', authRoute);

// Common
const commonRoute = require('./routes/commonRoutes');
app.use('/api', commonRoute);

const port = process.env.SERVER_PORT | 8001

app.listen(port, ()=>{
    console.log('server is runnig on port :- '+port);
});