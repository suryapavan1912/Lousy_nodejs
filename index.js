import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid';
import { filter , product } from './functions/product.js';
import { Createuser , Updateuser } from './functions/user.js';
import bodyParser from 'body-parser';
import { Updatecart, Updatelist } from './functions/cart.js';
import { Deleteitem } from './functions/deleteitem.js';

const app = express();
const Port = 9000;

// const corsOptions ={ origin:'http://localhost:3000' , credentials:true , optionSuccessStatus:200 }
app.use(cors());
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.get('/api/pavan', (req,res)=>res.json(uuidv4()))

async function main() {
  await mongoose.connect('mongodb+srv://pavan:pavan@cluster0.u9inhab.mongodb.net/?retryWrites=true&w=majority' );
}
main().catch(err => console.log(err.message));

//user
app.post('/user', Createuser)
app.get('/user', Updateuser )

//cart
app.post('/cart', Updatecart )
app.post('/delete' , Deleteitem)

//wishlist
app.post('/wishlist' , Updatelist)

//products

//filter
app.get('/products', filter )
  
//Product
app.get('/product/:key', product )

app.listen(Port, () => {
  console.log(`Example app listening on port: http://localhost:${Port}`)
})