import express from 'express';
import cors from 'cors'
import { v4 as uuidv4 } from 'uuid';
import { filter , product } from './functions/functions.js';
const app = express();
const Port = 9000;

// const corsOptions ={ origin:'http://localhost:3000' , credentials:true , optionSuccessStatus:200 }
app.use(cors());

app.get('/api/pavan', (req,res)=>res.json(uuidv4()))

//filter

app.use('/api/products', filter)
  
//Product

app.get('/product/:key', product )

app.listen(Port, () => {
  console.log(`Example app listening on port: http://localhost:${Port}`)
})