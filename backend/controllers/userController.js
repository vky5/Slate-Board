const UserData = require('../models/userModel');
const APIFeatures = require('../utils/APIfeatures');

const storeUser = async (req, res) => {
    try {
        const newUser = await UserData.create(req.body);
        res.status(201).json({
            status: 'success',
            data: newUser
        });
    } catch (err) {
        console.error('Error Occurred:', err); 
        res.status(400).json({
            status: 'failed',
            msg: `Error Occurred: ${err.message}` 
        });
    }
};

const adminAllUser = async (req, res)=>{
    try{
        let allUser = new APIFeatures(UserData.find(), req.query).pagination();
        allUser = await allUser.query;

        res.status(200).json({
            status: 'success',
            results: allUser.length,
            data: allUser
        });
    }catch(err){
        res.status(400).json({
            status: 'failed',
            msg: `Error Occurred: ${err.message}` 
        })
    }
}

const adminNewUser = async (req, res) =>{
    try {
        const newUser = await UserData.create(req.body);

        res.status(201).json({
            status: 'success',
            data: newUser
        });

    } catch (err) {
        res.status(400).json({
            status: 'failed',
            msg: `Error Occurred: ${err.message}` 
        })
    }
}


const adminGetUserById = async (req, res)=>{
    try {
        const user = await UserData.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: user
        })
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            msg: `Error Occurred: ${err.message}` 
        })
    }
}
const adminDeleteUser = async (req, res) => {
    try {
        const user = await UserData.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status: 'success',
            deletedUser: user
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            msg: `Error Occurred: ${error.message}` 
        });
    }
};

const adminEditUser = async (req, res)=>{
    try {
        const userData = await UserData.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true // this will re run the validator to prevent any unintended fields updatation 
        });
        
        res.status(200).json({
            status: 'success',
            data: userData
        })


    } catch (err) {
        res.status(400).json({
            status: 'failed',
            msg: `Error Occurred: ${error.message}` 
        });
    }
}

module.exports = {storeUser, adminAllUser, adminNewUser, adminGetUserById, adminDeleteUser, adminEditUser};


