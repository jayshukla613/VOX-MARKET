const {Schema,model} = require('../connection');

const mySchema = new Schema({
    name:{type:String},
    email:{type:String, unique:true, required:true},
    phone:{type:Number, required:true},
    password:{type:String,required:true},
    businessName:{type:String,required:true},
    taxId:{type:Number,required:true,unique:true},
    storeName:{type:String,required:true},
    storeCategory:{type:String,required:true},
    businessType:{type:String,required:true},
   address:{type:String,required:true},
    createdAt: { type: Date, default: Date.now }

})
module.exports = model('seller',mySchema)