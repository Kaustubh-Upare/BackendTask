const express=require('express');
const { userAuth } = require('../middleware/Auth');
const { savePreferences, getPreferences } = require('../controller/preferencesHandler');
const route=express.Router();

route.use(userAuth);

route.post('/',savePreferences);
route.get('/',getPreferences);

module.exports=route;