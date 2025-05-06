const {Schema ,model,Types}=require('../connection')

const imageSchema=new Schema({
    photo:{type:[String]},
    title:{type:String},
    description:{type:String},
    category:{type:String},
    user: { type: Types.ObjectId, ref: 'user', require: true }

})
module.exports=model('image',imageSchema)