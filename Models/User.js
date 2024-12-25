const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
        enum:['Male','Female']
    },
    hobbies:{
        type:String,
        
    },
    mobileNumber:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    dob:{
      type:String
    },
    address:{
        type:String
    },
    isDeleted:{
        type:Boolean,
        default:false
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;