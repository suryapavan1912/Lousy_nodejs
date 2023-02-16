import userinfo from './functions/mongoose.js'
import products from './data/db.js';

export const sendusersdata = async(req,res)=>{
    
    const filters = req.query;
    try {
        const [ userdata ] = await userinfo.find({'id':filters.userid});
        console.log(userdata);
        const cartArray = userdata?.Cart
        const cartitems = []
        products.map(item=>{
            if (cartArray?.includes(item.id)){
                cartitems.push(item)
            }
        })
        res.json(cartitems)

    } catch (error) {
        console.log(error.message);
    }

}

export const getuserdata = async(req,res)=>{

    const { id , product } = req.body
    const [ userdata ] = await userinfo.find({id})
    // console.log(userdata);
    if ( !userdata.Cart?.includes(product)){
    userdata.Cart.push(product)
    }
    try {
        await userdata.save()
        console.log(userdata.Cart);
    }
    catch (error) {
        console.log(error.messsage);
    }

}

export const Createuser = async(req,res)=>{

    const { id , email , name } = req.body
    const newuser = new userinfo({id,email,name})
    try {
        await newuser.save()
        console.log(newuser);
    }
    catch (error) {
        console.log(error.message);
    }

}