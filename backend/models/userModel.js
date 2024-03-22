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
        validate: [validator.isEmail, 'Please enter a valid email']
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
    passwordChangedAt: {
        type: Date
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

// an instance method - an instance is the method which is going to be available on all documents of a certain collection

userDataSchema.methods.correctPassword = async function(candidatePassword, userPassword){
    // this.password // not available as we have select = false
    return await bcrypt.compare(candidatePassword, userPassword)
}

userDataSchema.methods.changedPasswordAfter = function(JWTTimestamp){
    if (this.passwordChangedAt){ // if this property exists the user has changed their password and if not then not and only if it exists we need to compare date to check if the JWT was issued b4 password change or after password change and we want it to be after password changed
        const changedTimeStamp = parseInt(this.passwordChangedAt.getTime()/1000, 10);
        // console.log(this.passwordChangedAt, JWTTimestamp); 

        return JWTTimestamp < changedTimeStamp;
        
    } 

    return false
}


const UserData = mongoose.model('UserData', userDataSchema);

module.exports = UserData;


//TODO : add validators to all the field with appropriate message