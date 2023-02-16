import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    id : String,
    email : String,
    name : String,
    Cart : [String],
    Orders : [String],
    Wishlist : [String]
  });

  const userinfo = mongoose.model('users', userSchema);


// const pavan = new userinfo({ id: 'B6kHCF1gZVYawCmNtBZGzd4XOI22',Cart : ['e489e989-4090-424c-8382-64f3bfde86af','e25b93a2-5152-4321-87b2-b6766ae1746f'] });
// console.log(pavan);
// await pavan.save()


export default userinfo;