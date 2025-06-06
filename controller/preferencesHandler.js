const Preferences=require("../model/Preferences.js");
const { TryCatcher }=require( "../utility/errorHandler.js");

const savePreferences=TryCatcher(async(req,res,next)=>{
    const { theme, layout } = req.body;
    const existing = await Preferences.findOne({ user: req.user});
    if(existing){
        existing.theme=theme;
        existing.layout = layout;
        await existing.save();
        return res.json(existing);
    }
    const pref=await Preferences.create({
        user:req.user,
        theme,
        layout
    });

    res.status(201).json({
        message:'Preferences saved Succesfully',
        pref})
})


const getPreferences=TryCatcher(async(req,res,next)=>{
     const preferences = await Preferences.findOne({ user: req.user });
     res.json(preferences)
})

module.exports={savePreferences,getPreferences};