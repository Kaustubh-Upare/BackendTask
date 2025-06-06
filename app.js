require('dotenv').config();

const express=require('express');
const { mongoDBConnect } = require('./utility/DBConnect');
const { ErrorMiddleware } = require('./utility/errorHandler');

// Database Connection
mongoDBConnect(process.env.MONGODB_URI);

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Error Middleware
app.use(ErrorMiddleware);



app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})