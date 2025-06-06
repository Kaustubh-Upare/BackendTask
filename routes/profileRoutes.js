const express=require('express');
const { userAuth } = require('../middleware/Auth');
const route=express.Router();
const {updateProfile,dashboardSummary} =require('../controller/profileHandler.js')

route.use(userAuth);

route.patch('/',updateProfile);
route.get('/dashboard-summary',dashboardSummary);

module.exports=route;