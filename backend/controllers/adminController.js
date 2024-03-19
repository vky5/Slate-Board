const UserData = require('../models/userModel');
const APIFeatures = require('../utils/APIfeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const adminAllUser = catchAsync (async (req, res, next)=>{
    let allUser = new APIFeatures(UserData.find(), req.query).pagination();
    allUser = await allUser.query;

    res.status(200).json({
        status: 'success',
        results: allUser.length,
        data: allUser
    });

    next();
});

const adminNewUser = catchAsync( async (req, res, next) =>{
    const newUser = await UserData.create(req.body);

    res.status(201).json({
        status: 'success',
        data: newUser
    });

    next();

})


const adminGetUserById = catchAsync (async (req, res, next) =>{
    const findUser = await UserData.findById(req.params.id);

    if (!findUser){
        return next(new AppError(`No User with ID ${req.params.id} found`, 400));
    }

    res.status(200).json({
        status: 'success',
        data: findUser
    });


})


const adminDeleteUser = catchAsync( async (req, res, next) => {
    const user = await UserData.findByIdAndDelete(req.params.id);

    if (!user){
        return next(new AppError(`No User with ID ${req.params.id} found`, 400));
    }

    res.status(200).json({
        status: 'success',
        deletedUser: user
    });
})

const adminEditUser = catchAsync( async (req, res, next)=>{
    const userData = await UserData.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true // this will re run the validator to prevent any unintended fields updatation 
    });

    if (!userData){
        return next(new AppError(`No User with ID ${req.params.id} found`, 400));
    }
        
    res.status(200).json({
        status: 'success',
        data: userData
    })
})


module.exports = {adminAllUser, adminNewUser, adminGetUserById, adminDeleteUser, adminEditUser};

