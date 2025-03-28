
const { Schema, model, Types } = require('../connection');

const reviewSchema = Schema({
   user: { type: Types.ObjectId, ref: 'user', require: true },
  rating: {type: Number, required: true, min: 1,max: 5,},
<<<<<<< HEAD
  review: {type: String,required: true,minlength:4, }
=======
  review: {type: String,required: true,minlength: 5, }
>>>>>>> 545311ce3ee74c5dc93266a63a349423bbc7331f
});

module.exports = model("Review", reviewSchema);