import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid';
import { filter , product } from './functions/product.js';
import { Createuser , Updateuser } from './functions/user.js';
import bodyParser from 'body-parser';
import { Updatecart, Updatewishlist } from './functions/update.js';
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

//Deleteitem
//user
app.post('/user', Createuser)
app.get('/user', Updateuser )

//cart
app.post('/cart', Updatecart )
app.post('/cart/delete' , Deleteitem)
// app.get('/cart', Sendcart)

//wishlist
app.post('/wishlist' , Updatewishlist )


//products

//filter
app.get('/products', filter )
  
//Product
app.get('/product/:key', product )

app.listen(Port, () => {
  console.log(`Example app listening on port: http://localhost:${Port}`)
})