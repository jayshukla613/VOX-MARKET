const {Schema  ,model}=require('../connection');

const myschema=Schema({
    name:{type:String,require:true},
    image:{type:String,require:true},
    material: {type:String ,require:true},
    
    price:{type:Number,require:true},
    offer:{type:Number,require:true},
    description:{type:String,require:true},
    category:{type:String,require:true},
    quantity:{type:Number,require:true},
    color:{type:String,require:true},
    size:{type:String,require:true},
    brand:{type:String,require:true},
    retunepolicy:{type:String,require:true},
    warranty:{type:String,require:true},
    feature:{type:String,require:true}


    
    

})
module.exports = model('product', myschema);