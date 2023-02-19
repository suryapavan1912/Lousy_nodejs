import userinfo from "./mongoose.js"

export const Updatecart = async(req,res)=>{

    const { id , product } = req.body
    // console.log(product);
    try {
    const [ userdata ] = await userinfo.find({id})
    let newproduct = true
    let newvarient = false

    userdata.cart?.map(item=>{
        if (product.id === item.id){
            newvarient = true
            newproduct = false
            item.varient.map( vari => {
                if(vari.size === product.varient.size){
                    vari.quantity +=product.varient.quantity;
                    newvarient = false;
                }})
            if(newvarient){
                item.varient.push(product.varient)
                }
            }})
    if(newproduct){
        userdata.cart.push(product)
        }
    await userdata.save()
    res.json(userdata)
    }
    catch (error) {
        console.log(error.messsage);
    }
}


export const Updatelist = async(req,res)=>{

    const { id , product } = req.body
    try {
    const [ userdata ] = await userinfo.find({id})
    let newproduct = true

    userdata.wishlist?.map(item=>{
        if (product.id === item.id){  newproduct = false  }})
        
    if(newproduct){ userdata.wishlist.push(product) }
    
    await userdata.save()
    res.json(userdata)
    }
    catch (error) {
        console.log(error.messsage);
    }
}



// export const Sendcart = async(req,res)=>{

//     const filters = req.query;
//     try {
//         const [ userdata ] = await userinfo.find({'id':filters.userid});
//         // const cartArray = userdata?.Cart
//         // const cartitems = []
//         // products.map(product=>{
//         //     cartArray.map(item =>{
//         //     })
//         // })
//         console.log(userdata);
//         // res.json(userdata)

//     } catch (error) {
//         console.log(error.message);
//     }

// }







// export const Updatecart = async(req,res)=>{

//     const { id , product } = req.body
//     try {
//     const [ userdata ] = await userinfo.find({id})
//     let newdata = false
//     userdata.cart.map(item=>{
//         if (product.id === item.id){
//             if(product.size === item.size){
//                 item.quantity += product.quantity
//             }
//             else{
//                 newdata = true
//             }
//         }
//         else{
//             newdata = true
//         }})
//         if (newdata){
//             userdata.cart.push(product)
//         }
//         await userdata.save()
//         res.json(userdata)
//         console.log(userdata);
//     }
//     catch (error) {
//         console.log(error.messsage);
//     }

// }