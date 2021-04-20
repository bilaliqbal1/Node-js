const express = require('express');
const morgan = require('morgan');
const app = express()


// /bring in routes
const {getposts} = require('./routes/post')

//middleware
app.use(morgan('dev'))

app.get('/', getposts);


const port = 8080
app.listen(port,()=>{
    console.log(`A node api is listening on post:${port}`);
});