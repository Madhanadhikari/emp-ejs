const mongoose = require('mongoose');
const { type } = require('os');

const empschema= mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    salary:{
type:Number,
required:true
    },
    position:{
        type:String,
        required:true
    }
})

const empModel=mongoose.model("empUI",empschema);

module.exports=empModel;