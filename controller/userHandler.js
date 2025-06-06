const User=require("../model/User.js");
const { ErrorHandler, TryCatcher } =require("../utility/errorHandler.js");
const { generateToken, cookieOption }=require("../utility/feature.js");


const registerHandler=TryCatcher(async(req,res,next)=>{
    const {name,email,password}=req.body;
    
    let user=await User.findOne({email});
    if(user){
        return next(new ErrorHandler('Email Already Exists',400));
    }
    user=await User.create({name,email,password});

    await user.save();

    
    const token = generateToken(user._id);

    res.status(201).cookie('token',token,cookieOption).json({
      message:`Successfully created the Account`,
      user: { name: user.name, email: user.email }
    })

})

const loginHandler=TryCatcher(async(req,res,next)=>{
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))){
        return next(new ErrorHandler("Invalid credentials",401))
    }

    const token = generateToken(user._id);


    res.status(200).cookie('token',token,cookieOption).json({
        message:`Welcome Back ${user.name}`
    })

})

const getProfile=TryCatcher(async(req,res,next)=>{
    const user=await User.findById(req.user).select('-password');
    res.json(user);
})

module.exports={registerHandler,loginHandler,getProfile}