const express=require('express');
const Model=require('../models/contactModel');
const router=express.Router();


router.post('/contactadd',(req,res)=>{
    const {name,email,message}=req.body;
    console.log(req.body);
    new Model({name,email,message}).save()    
    .then((data)=>{
        res.status(200).json(data);
    }
    ).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    });
}
);
router.get('/getall',(req,res)=>{
    Model.find()
    .then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);
    });
});
module.exports=router;

