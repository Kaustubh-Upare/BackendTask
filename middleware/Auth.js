const jwt=require('jsonwebtoken');
const { TryCatcher, ErrorHandler } = require('../utility/errorHandler.js');
const User = require('../model/User.js');


const userAuth=TryCatcher(async(req,res,next)=>{
    const token=req.header.authorization?.split(" ")[1];

    if(!token) return next(new ErrorHandler('Please! Login First to access',401));
    
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=await User.findById(decoded.id).select('-password');
    next();

})

module.exports={userAuth}