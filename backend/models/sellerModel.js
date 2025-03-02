const {Schema,model} = require('../connection');

const mySchema = new Schema({
    name:{type:String},
    email:{type:String, unique:true, required:true},
    phone:{type:Number, required:true},
    password:{type:String,required:true,unique:true},
    businessName:{type:String,required:true,unique:true},
    taxId:{type:Number,required:true,unique:true},
    storeName:{type:String,required:true},
    storeCategory:{type:String,required:true},
    businessAddress:{type:String,required:true}

})
module.exports = model('seller',mySchema)