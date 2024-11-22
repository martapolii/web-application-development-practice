const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {isEmail} = require('validator')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Pls enter an email'],
        unique: true,
        lowercase: true,
        validator: [isEmail, 'Pls enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: [6, 'Min length of password is 6']
    }
})

userSchema.pre('save', async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();

})


userSchema.statics.login =  async function(email, password)
{
    const user = await this.findOne({email});
    if(user)
    {
       const isAuth = await bcrypt.compare(password, user.password);
       if(isAuth)
       {
        return user;
       }
       throw Error('incorrect password')

    }
    else{
        throw Error('incorrect email')
    }
}

const User = mongoose.model('user', userSchema);

module.exports = User;