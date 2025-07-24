const mongoose = require('mongoose');

const userschema= mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    pass:{
        type:String,
        required:true
    }
})

const userModel=mongoose.model("empUIuser",userschema);

module.exports=userModel;