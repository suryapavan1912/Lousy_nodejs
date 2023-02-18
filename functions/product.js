import data from '../data/db.js'
import express from 'express';



export const filter = (req, res, next)=>{
  const filters = req.query;
  const filteredUsers = data.filter(user => {
    let isValid = true;
    for (var key in filters) {
      isValid = isValid && filters[key].includes(user[key]);
    }
    return isValid;
  });
  res.send(filteredUsers);
};


export const product = function(req,res) {

    const key = req.params.key    
    const product = data.filter(item => item.id == key)
    res.json(product[0])
}

export const cart = function(req,res) {

  const key = req.params.key    
  const product = data.filter(item => item.id == key)
  res.json(product[0])
}





