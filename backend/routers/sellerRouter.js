const express = require('express');
const Model = require('../models/sellerModel');
const seller = express.Router();

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

 module.exports= seller;