const express = require('express');
const {body, validationResult} = require('express-validator');

const authCotroller = require('../controllers/authController');

const router = express.Router(); 

router.post('/signup', authCotroller.signup);

router.post('/login', authCotroller.login);

module.exports= router;