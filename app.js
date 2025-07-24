const express = require('express');
const ConnectDB = require('./db/db');
const Route = require('./route/route');
const session = require('express-session');

const app=express();

ConnectDB();

app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret:"UI",
    saveUninitialized:false,
    resave:false,
    
}))

app.use(Route);


app.listen(3000,()=>{
    console.log("server...");
    
})