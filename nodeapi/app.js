const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express()
const dotenv = require('dotenv');
dotenv.config()


mongoose.connect(process.env.mongouri,
    {
        useNewUrlParser : true
    }).then ( () => console.log('db connected'));

mongoose.connection.on('error',err =>{
    console.log(`db connection error ${err.message}`);
})
// /bring in routes
const postRoutes = require('./routes/post')

//middleware
app.use(morgan('dev'))

app.use('/', postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`);
});