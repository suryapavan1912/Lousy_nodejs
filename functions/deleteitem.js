import userinfo from "./mongoose.js"

export const Deleteitem = async(req,res)=>{

    const { id , product_id , varient } = req.body
    try {
    const [ userdata ] = await userinfo.find({id})

        userdata.cart?.map(item =>{
            if(item.id === product_id){
                if(item.varient.length === 1){
                    userdata.cart = userdata.cart.filter(data => data.id != product_id)
                }
                else{
                    item.varient = item?.varient?.filter(vari => vari.size != varient.size)
                }
            }
        })
    await userdata.save()
    res.json(userdata)

    }
    catch (error) {
        console.log(error.messsage);
    }
}

export const Deletewish = async(req,res)=>{

    try{
    const { id , product } = req.body
    const [ userdata ] = await userinfo.find({id})
    userdata.wishlist = userdata.wishlist.filter(item => item.id !== product)
    await userdata.save()
    res.json(userdata)
    }
    catch (error) {
        console.log(error.messsage);
    }
}
