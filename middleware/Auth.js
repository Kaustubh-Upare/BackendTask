const jwt=require('jsonwebtoken');
const { TryCatcher, ErrorHandler } = require('../utility/errorHandler.js');


const userAuth=TryCatcher(async(req,res,next)=>{
    const token=req.cookies.token;
    
    if(!token) return next(new ErrorHandler('Please! Login First to access',401));
    
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decoded.id
    next();

})

module.exports={userAuth}