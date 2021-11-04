const express = require('express');
const {body, validationResult} = require('express-validator')

const router = express.Router();

router.get('/', (req,res) => {
    return res.status(200).send("Welcome to the example routes");
})

//we're sending information to the server
router.post('/validateuser', body('email').isEmail(), body('password').isLength({min:5}) ,(req, res) => {

    const errors = validationResult(req);
    //if there are errors (errors is not empty)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //information we receive from http body
    const {email, password} = req.body;

    const user = {
        email:email,
        password:password
    };

    return res.status(200).json({message:'User was added', userObject:user})

})

router.post('/sanitizeuser',body('email').isEmail().normalizeEmail(),(req, res) => {
    const errors = validationResult(req);
    //if there are errors (errors is not empty)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //information we receive from http body
    const {email, password} = req.body;

    const user = {
        email:email,
        password:password
    };

    return res.status(200).json({message:'User was added', userObject:user})
})

//SELECT * FROM dbo.test t WHERE t.name = 'test' AND t.name < 4
router.post('/statement',body('statement').escape(),(req, res) => {
    const errors = validationResult(req);
    //if there are errors (errors is not empty)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //information we receive from http body
    const {statement} = req.body;

    return res.status(200).json({message:'This is our statement', statementObject:statement})
})

router.post('/removespaces',body('statement').trim(),(req, res) => {
    const errors = validationResult(req);
    //if there are errors (errors is not empty)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //information we receive from http body
    const {statement} = req.body;

    return res.status(200).json({message:'This is our statement', statementObject:statement})
})

router.post('/checkmobilephone',body('phonenumber').trim().isMobilePhone(['en-US']),(req, res) => {
    const errors = validationResult(req);
    //if there are errors (errors is not empty)
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }

    //information we receive from http body
    const {phonenumber} = req.body;

    return res.status(200).json(phonenumber)
})




module.exports = router;

