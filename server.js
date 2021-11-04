const express = require('express');

const app = express();
//middleware to parese json information from http body request to req.body.* object. 
app.use(express.json());

//importing the router module.
const exampleRoutes = require('./routes/exampleRoutes');
const validatorRoutes = require('./routes/validatorRoutes');

//registering the router module
app.use('/examples', exampleRoutes);
app.use('/validation', validatorRoutes);


//listening for request on port 3000
app.listen(3000, ()=> {
    console.log("Listening for requests...")
})