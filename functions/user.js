
import userinfo from './mongoose.js'

export const Updateuser = async(req,res)=>{
    
    const filters = req.query;
    try {
        const [ userdata ] = await userinfo.find({'id':filters.userid});
        res.json(userdata)

    } catch (error) {
        console.log(error.message);
    }

}

export const Createuser = async(req,res)=>{

    const { id , email , name } = req.body
    const newuser = new userinfo({ id , email , name})
    try {
        await newuser.save()
    }
    catch (error) {
        console.log(error.message);
    }
}
