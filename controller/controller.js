const { Mongoose} = require('mongoose');
const empModel = require('../model/model');
const userModel = require('../model/usermodel');
const bcrypt = require('bcryptjs');
const session = require('express-session');


const regisform=async(req,resp)=>{
    resp.render("register");
}

const loginform=async(req,resp)=>{
    resp.render("login");
}

const home=async(req,resp)=>{
    try {
        const data= await empModel.find();
                resp.render("dashboard",{name:req.session.name,data:data});
    } catch (error) {
        console.log(error);
        
    }
}

const register=async(req,resp)=>{
    try {
        const {name,pass}=req.body;
        const hashpass=await bcrypt.hash(pass,10);
        await userModel.create({name,pass:hashpass});
        resp.redirect("/login");
    } catch (error) {
        console.log(error);
        
    }
}

const loginchk=async(req,resp)=>{
         try {
            const {name,pass}=req.body;
            const user= await userModel.findOne({name:name});
            if(user && await(bcrypt.compare(pass,user.pass))){
                req.session.name=name;
                const data= await empModel.find();
                resp.render("dashboard",{name:req.session.name,data:data});
            }
         } catch (error) {
            console.log(error);
            
         }
}


//emp

const addemmp=async(req,resp)=>{
    try {
        const {name,salary,position}=req.body;
        await empModel.create({name,salary,position});
          const data= await empModel.find();
                resp.render("dashboard",{name:req.session.name,data:data});
      
    } catch (error) {
        console.log(error);
        
    }
}

const deleteemp=async(req,resp)=>{
    try {
        await empModel.deleteOne({_id:req.params.id});
         const data= await empModel.find();
                resp.render("dashboard",{name:req.session.name,data:data});
    } catch (error) {
        console.log(error);
        
    }
}

const Fetchemp=async(req,resp)=>{
    try {
        const data=await empModel.findOne({_id:req.params.id});
        resp.render("edit",{data:data,name:req.session.name});
    } catch (error) {
        console.log(error);
        
    }
}

const updateemp=async(req,resp)=>{
    try {
        const {name,salary,position}=await empModel.updateOne({_id:req.params.id},req.body);
        resp.redirect("/home");
    } catch (error) {
        console.log(error);
        
    }
}

const logout=async(req,resp)=>{
    try {
        req.session.destroy;
        resp.redirect('/');
    } catch (error) {
        console.log(error);
        
    }
}


module.exports={register,regisform,loginform,loginchk,addemmp,deleteemp,home,Fetchemp,updateemp,logout};

