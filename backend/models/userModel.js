const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Must have username"]
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please enter a an email"],
        unique: true,
        lowercase: true,
        validator: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true,  'Please enter a Password'],
        minlength: 8,
        select: false
    },
    checkPassword:{
        type: String,
        required: [true, 'Please confirm your Password'],
        validate: {
            validator: function (el){
                return el===this.password;
            },
            message: "Passwords are not the same"
        }
    },
    date: {
        type: Date,
        default: Date.now
    }
})

userDataSchema.pre('save', async function(next){
    if (!this.isModified('password')) return next(); 

    // hash the password with cores of 12
    this.password = await bcrypt.hash(this.password, 12); 

    // delete the checkPassword field
    this.checkPassword = undefined; 
    
    next();

})

const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;


//TODO : add validators to all the field with appropriate message