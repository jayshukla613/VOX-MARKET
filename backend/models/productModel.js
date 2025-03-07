const {Schema  ,model}=require('../connection');

const myschema=Schema({
    name:{type:String,require:true},
    image:{ type:String,require:true},
    price:{type:Number,require:true},
    description:{type:String,require:true},
    category:{type:String,require:true},
    rating:{type:Number,require:true},
    reviews:{type:Number,require:true},
    quantity:{type:Number,require:true}
    
})
module.exports = model('product', myschema);