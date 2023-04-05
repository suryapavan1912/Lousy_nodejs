import productinfo from './mongoose_products.js';

export const filter = async (req, res)=>{
  try {
    const filters = req.query;
    const products = await productinfo.find(filters)
    res.json(products)
  } catch (error) {
    console.log(error.message);
  }
};


export const product = async (req,res)=>{
  try {
    const id = req.params.key
    const [ product ] = await productinfo.find({id});
    res.json(product)
  }
  catch(error){
    console.log(error.message);
  }
}

// import data from '../data/db.js'
// import express from 'express';

// export const filter = (req, res, next)=>{
//   const filters = req.query;
//   const filteredUsers = data.filter(user => {
//     let isValid = true;
//     for (var key in filters) {
//       isValid = isValid && filters[key].includes(user[key]);
//     }
//     return isValid;
//   });
//   res.send(filteredUsers);
// };


// export const product = function(req,res) {

//     const key = req.params.key    
//     const product = data.filter(item => item.id == key)
//     res.json(product[0])
// }