const express = require('express');
const Model = require('../models/sellerModel');
const seller = express.Router();

const jwt = require('jsonwebtoken');
 const verifytoken = require('../middlewares/verifytoken')
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
 
 seller.get('/getdetails', verifytoken, (req, res) => {
    Model.findById(req.user._id)
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
 
seller.get("/seller/:id", async (req, res) => {
    try {
        const seller = await Seller.findById(req.params.id);
        if (!seller) {
            return res.status(404).json({ message: "Seller not found" });
        }
        res.json(seller);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
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

seller.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    const updatedSeller = await Model.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );

    if (!updatedSeller) {
      return res.status(404).json({ message: "Seller not found!" });
    }

    res.status(200).json({ message: "Seller updated successfully!", seller: updatedSeller });
  } catch (error) {
    res.status(500).json({ message: "Failed to update seller!", error: error.message });
  }
});

 module.exports= seller;