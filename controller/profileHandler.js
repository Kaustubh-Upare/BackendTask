import User from "../model/User";
import { TryCatcher } from "../utility/errorHandler";


const updateProfile=TryCatcher(async(req,res,next)=>{
    const { name, email } = req.body;
    const user = await User.findById(req.user._id);

    user.name=name || user.name;
    user.email=email || user.email;
    
    await user.save();
    
    res.json({ message:'Succesfully updated the Fields' });

})

const dashboardSummary=TryCatcher(async(req,res,next)=>{
    res.json({
    teams: 13,
    projects: 15,
    notifications: 12
  });
})

module.exports={updateProfile,dashboardSummary}