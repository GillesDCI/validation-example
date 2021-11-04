const express = require('express');
//import our validation middleware
const { validateUser, sanitizeUser } = require('./../middleware/uservalidation');

const router = express.Router();

router.get('/', (req,res) => {
    return res.status(200).send("Welcome to the validatorRoutes");
})


router.post('/validateuser', validateUser, sanitizeUser, (req,res) => {
    const {firstname, lastname, email} = req.body;

    const user = {
        firstname:firstname,
        lastname:lastname,
        email:email
    };

    return res.status(200).json({user:user});
})



module.exports = router;