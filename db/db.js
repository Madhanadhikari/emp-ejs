const mongoose = require('mongoose');

const ConnectDB=()=>{
    mongoose.connect("") .then(() => {
        console.log("db...");
        
    }).catch((err) => {
        console.log(err);
        
    });
}

module.exports=ConnectDB;
