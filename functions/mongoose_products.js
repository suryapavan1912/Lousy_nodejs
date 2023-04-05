import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    id            : String,
    ajio          : String,
    brand         : String,
    title         : String,
    images        : [String],
    oldprice      : Number,
    price         : Number,
    description   : [String],
    type          : String,
    category      : String,
    gender        : String,
    featured      : Boolean,
    trending      : Boolean,
    exclusive     : Boolean
  });

const productinfo = mongoose.model('products', productSchema);

export default productinfo