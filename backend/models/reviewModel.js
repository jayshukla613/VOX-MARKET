
const { Schema, model, Types } = require('../connection');

const reviewSchema = Schema({
   user: { type: Types.ObjectId, ref: 'user', require: true },
  rating: {type: Number, required: true, min: 1,max: 5,},
  review: {type: String,required: true,minlength: 10, }
});

module.exports = model("Review", reviewSchema);