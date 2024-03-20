const UserData = require('../models/userModel');
const APIFeatures = require('../utils/APIfeatures');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const jwt = require('jsonwebtoken');

const signToken = id=>{
    return jwt.sign({id}, process.env.JWT_SECRET, { 
        expiresIn: process.env.JWT_EXPIRES_IN
    }); 
    // the first argument is payload and second argument is secret. The header will be automatically generated
}

const signup = catchAsync (async (req, res, next) => {
    const newUser = await UserData.create({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        checkPassword: req.body.checkPassword
    });
      
    const token = signToken(newUser._id);

    if (!newUser){
        return next(new AppError('User can not be created', 400));
    }

    console.log(token);

    res.status(201).json({
        status: 'success',
        token,
        data: newUser
    });

});


const login = catchAsync( async (req, res, next)=>{
    const {email, password} = req.body;

    if (!email || !password){
        return next(new AppError('Please provide email and password', 400));
    }

    const user = await UserData.findOne({
        email,
    }).select('+password') // we use + to select the fields which are hidden by default


    if (!user || !(await user.correctPassword(password, user.password))){
        return next(new AppError('Invalid email or password'), 401) // 401 is unauthorized
    }

    console.log(user);
    const token = signToken(user._id);

    res.status(200).json({
        status: 'success',
        token
    })
})


module.exports = {signup, login};

