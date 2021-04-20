// const {sum} = require('./helpers');

// const total = sum(10,200);
// console.log("TOtal",total);

// working with node core modules nodemoon, express, fs(file system),
// const express = require('express');
// const app = express();

// app.get('/',(req, res) =>{
//     res.send('hey how are you?');
// })

// app.listen(3000)

const fs = require('fs');
const fileName= 'target.txt';

fs.watch(fileName,()=>console.log('file changed'));


