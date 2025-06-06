const jwt=require('jsonwebtoken');

const generateToken=(userId)=>{
    return jwt.sign({id:userId},process.env.JWT_SECRET,{expiresIn:'1d'})
}

const cookieOption={
    httpOnly: true,
    sameSite: 'Strict',
    maxAge: 24 * 60 * 60 * 1000, 
}

module.exports={generateToken,cookieOption};