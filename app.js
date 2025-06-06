require('dotenv').config();

const express=require('express');
const { mongoDBConnect } = require('./utility/DBConnect');
const { ErrorMiddleware } = require('./utility/errorHandler');
const cookieParser = require('cookie-parser');

// Routes
const userRoutes=require('./routes/userRoutes.js');
const prefRoutes=require('./routes/preferencesRoutes.js');
const profileRoutes=require('./routes/profileRoutes.js');

// Database Connection
mongoDBConnect(process.env.MONGODB_URI);

const app=express();
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Error Middleware
app.use(ErrorMiddleware);


app.use('/api',userRoutes);
app.use('/api/preferences',prefRoutes);
app.use('/api/profile',profileRoutes);



app.listen(3000,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})