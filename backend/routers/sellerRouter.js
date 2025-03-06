const express = require('express');
const Model = require('../models/sellerModel');
const seller = express.Router();

const jwt = require('jsonwebtoken');
// const verifyToken = require('../middleware/verifyToken')
require('dotenv').config();

seller.post('/add',(req, res) => { 
    console.log(req.body);
    new Model(req.body).save()
    .then((result) => {
        res.status(200).json(result);
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

seller.get('/getall', (req,res)=>{
    Model.find()
    .then((result) => {
          res.status(200).json(result);
    }).catch((err) => {
         console.log(err);
         res.status(500).json(err);
    });
 });

 seller.get('/getdetails', (req,res)=>{
    Model.find()
    .then((result) => {
          res.status(200).json(result);
    }).catch((err) => {
         console.log(err);
         res.status(500).json(err);
    });
 });
 
 seller.post('/authenticate',(req,res)=>{
    Model.findOne(req.body)
    .then((result) => {
        if(result){
            //generate tokan
            const{_id,name,email}=result;
            const payload={_id,name,email}
            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                    expiresIn:'1h'
                },
                (err,token)=>{
                    if(err){
                        console.log(err);
                        res.status(500).json(err)
                    }
                    else{
                        res.status(200).json({token});
                    }
                }
            )


        }
        else{
            res.status(401).json({message : 'invalid user email or password'});
        }

        
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
        
    });

});

 module.exports= seller;