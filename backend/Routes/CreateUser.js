const express = require('express')
const router = express.Router()
const User = require('../models/User')
const {body, validationResult} = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "nyerqwertyratrace@getwelldeepshitdarklifedownfall"
router.post("/createuser", [body('email').isEmail(), body('password').isLength({min:8})], 
async(req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt);
    try {
       await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: secPassword
        })
        res.json({success:true})
    } catch (error) {
        console.log(error)
        res.json({success: false});
    }
})

router.post("/loginuser",[body('email').isEmail(), body('password').isLength({min:8})],
async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
let email= req.body.email
    try {
      let userData= await User.findOne({email});
      if(!userData)
      {
        return res.status(400).json({errors: "Type correct login details"});
      }
      const pwdCompare = await bcrypt.compare(req.body.password, userData.password);
    if(!pwdCompare){
        return res.status(400).json({errors: "Type correct login details"});
      }
    //   if(req.body.password !== userData.password){
    //     return res.status(400).json({errors: "Type correct login details"});
    //   }
    const data = {
        user:{
            id: userData.id
        }
    }
    const authToken = jwt.sign(data, jwtSecret)
      return res.json({success: true, authToken: authToken})
    } catch (error) {
        console.log(error)
        res.json({success: false});
    }
})
module.exports = router;