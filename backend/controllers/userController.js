const UserData = require('../models/userModel');
const APIFeatures = require('../utils/APIfeatures');
const AppError = require('../utils/appError');


const catchAsync = require('../utils/catchAsync');


const storeUser = catchAsync (async (req, res, next) => {
    const newUser = await UserData.create(req.body);
    
    if (!newUser){
        return next(new AppError('User can not be created', 400));
    }

    res.status(201).json({
        status: 'success',
        data: newUser
    });

});

module.exports = {storeUser};


