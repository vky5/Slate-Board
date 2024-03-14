const express = require('express');
const {body, validationResult} = require('express-validator');

const userController = require('../controllers/userController');

const router = express.Router(); 

router
    .post('/signup',[
        body('name', 'Not a valid name').isLength({min: 3}),
        body('username', 'Not a valid username').isLength({min: 3}),
        body('email', 'Not a vaild Email').isEmail(),
        body('password', 'Not a valid password').isLength({min: 8})
    ], (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array()
            });
        }
        next();
    }, userController.storeUser);


    
router
    .route('/')
    .get()
    .post();
    




module.exports = router;