const mongoose=require('mongoose');

const preferencesSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    theme:{
        type:String
    },
    layout:{
        type:String
    }
})

module.exports=mongoose.model('Preferences',preferencesSchema);