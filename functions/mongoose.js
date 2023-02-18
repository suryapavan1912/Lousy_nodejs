import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    id : String,
    email : String,
    name : String,
    cart : [
      {
        id : String,
        varient : [{
        size : String,
        quantity : Number
      }],
        info : {
          brand : String,
          title : String,
          image : String,
          price : Number,
          oldprice : Number,
        }
      }
    ],
    orders : [String],
    wishlist : [String]
  });

const userinfo = mongoose.model('users', userSchema);

export default userinfo

// const dataSchema = new mongoose.Schema({
//     id : String,
//     email : String,
//     name : String,
//     Cart : [String],
//     Orders : [String],
//     Wishlist : [String]
//   });

// export const datainfo = mongoose.model('lousy_data', userSchema);

