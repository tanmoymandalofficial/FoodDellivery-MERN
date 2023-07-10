const express = require('express');
const Router = express.Router();
const user = require('../models/User');
// const { body, validationResult } = require('express-validator');
const { query, validationResult } = require('express-validator');


Router.post("/creatuser", async (req, res)=>{

    try {
        await user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location
        })
        console.log('get the data',req.body);
        res.json(req.body)
        // return res.send(`Hello, ${req.body.name}!`);
    } catch (error) {  
        console.log(error);
        res.json({success:false})
    }
})

Router.post("/loginuser", async (req, res)=>{
    let email = req.body.email;

    try {
        let userData = await user.findOne({email})
        if(!userData){
            return res.status(400).json({error:'Try login with correct credentaials'});
        }

        if(req.body.password !== userData.password){
            return res.status(400).json({error:'Incorrect Password'});
        }
        console.log('get the data',req.body);
        res.json(req.body)
        // return res.send(`Hello, ${req.body.name}!`);
    } catch (error) {  
        console.log(error);
        res.json({success:false})
    }
})


module.exports = Router