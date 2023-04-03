import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import { filter , product } from './functions/product.js';
import { Createuser , Updateuser } from './functions/user.js';
import { Updatecart, Updatelist } from './functions/cart.js';
import { Deleteitem, Deletewish } from './functions/deleteitem.js';

const app = express();
const Port = 9000;
dotenv.config()

const corsOptions ={ origin:'https://lousy-d1b70.web.app' , credentials:true , optionSuccessStatus:200 }
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

async function main() {
  await mongoose.connect(process.env.MONGOOSE_PATH);
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
app.post('/deletewish' , Deletewish )

//products

//filter
app.get('/products', filter )
  
//Product
app.get('/product/:key', product )

app.listen(Port, () => {
  console.log(`Example app listening on port: http://localhost:${Port}`)
})