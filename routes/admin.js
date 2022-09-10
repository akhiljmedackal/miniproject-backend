const express = require('express');
const auth = require('../middlewares/auth');
const User = require('../models/user');
const adminRouter = express.Router();


adminRouter.post('/adduser/register',auth,async(req,res)=>{
    try{
        const { email,password,username,role} = req.body;
        const user = await User.findOne({email});
        if(!user){
            addUser = new User({
                username,
                email,
                password,
                role,
            });
            await addUser.save();
            res.status(200).json({ msg: "user added Successfully" });
        }
        return res.status(400).json({ msg: "user Already Exists!!!" });
    }
    catch(e){
        res.status(500).json({ error: e.message });
    }
})
module.exports = adminRouter;