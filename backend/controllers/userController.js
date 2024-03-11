const UserData = require('../models/userModel');

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

module.exports = {storeUser};
