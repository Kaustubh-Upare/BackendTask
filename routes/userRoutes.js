const express=require('express');
const { userAuth } = require('../middleware/Auth');
const {registerHandler,loginHandler,getProfile}=require('../controller/userHandler.js')
const route=express.Router();

route.post('/register',registerHandler);
route.post('/login',loginHandler);

route.use(userAuth);

route.get('/profile',getProfile);

module.exports=route;