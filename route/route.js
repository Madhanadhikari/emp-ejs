const express = require('express');
const controller = require('../controller/controller');
const Route=express.Router();

Route.get('/',controller.regisform);
Route.get('/login',controller.loginform);
Route.get('/home',controller.home);
Route.get('/logout',controller.logout);
Route.post('/add',controller.addemmp);
Route.post('/register',controller.register);
Route.post('/loginchk',controller.loginchk);
Route.post('/delete/:id',controller.deleteemp);
Route.post('/edit/:id',controller.Fetchemp);
Route.post('/update/:id',controller.updateemp);



module.exports=Route;