import User from "../model/User.js";
import { ErrorHandler, TryCatcher } from "../utility/errorHandler.js";
import { generateToken } from "../utility/feature.js";


const registerHandler=TryCatcher(async(req,res,next)=>{
    const {name,email,password}=req.body;
    
    let user=await User.findOne({email});
    if(user){
        return next(new ErrorHandler('Email Already Exists',400));
    }
    user=await User.create({name,email,password});
    
    res.status(201).json({
      token: generateToken(user._id),
      user: { name: user.name, email: user.email }
    })

})

const loginHandler=TryCatcher(async(req,res,next)=>{
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))){
        return next(new ErrorHandler("Invalid credentials",401))
    }
    res.json({
      token: generateToken(user._id),
      user: { name: user.name, email: user.email }
    });

})

const getProfile=TryCatcher(async(req,res,next)=>{
    const user=await User.findById(req.user).select('-password');
    res.json(user);
})

module.exports={registerHandler,loginHandler,getProfile}