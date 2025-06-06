const mongoose=require('mongoose');

export const mongoDBConnect=(url)=>{
    mongoose.connect(url)
            .then(()=>console.log('Database is Connected'))
            .catch((er)=>{
                throw er});
}