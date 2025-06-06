const mongoose=require('mongoose');

const mongoDBConnect=(url)=>{
    mongoose.connect(url)
            .then(()=>console.log('Database is Connected'))
            .catch((er)=>{
                throw er});
}

module.exports={mongoDBConnect}