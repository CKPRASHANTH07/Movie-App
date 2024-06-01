import { Users } from "../models/users.js";
import bcrypt from 'bcrypt'
const signup_user=(async(username,password)=>{
    try {
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new Users({ username: username, password: hashedPassword })
        return user.save().then((stat)=>{
            return {"status":"Added New User"}
       }).catch((err)=>{
        if(err.code===11000){
            throw new Error("User Already Exists");
            }
            else{
                throw new Error(err.message);
            }
       })
        }catch{
            throw new Error("Error in Adding new User")
        }

})

export {signup_user}