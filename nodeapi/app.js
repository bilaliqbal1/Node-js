const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express()
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const expressValidator = require('express-validator')
dotenv.config()

console.log(process.env.mongouri);

mongoose.connect(process.env.mongouri,
    {
        useNewUrlParser : true,
        useUnifiedTopology: true,
    },(error)=>{
        if(!error){
            console.log("db connected");
        }
        else{
            console.log("error");
        }
    });

// mongoose.connection.on('error',err =>{
//     console.log(`db connection error ${err.message}`);
// })
// /bring in routes
const postRoutes = require('./routes/post');

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(expressValidator());

app.use('/', postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`);
});