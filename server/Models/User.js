import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullname:{
            type:String,
         
         
        },
       
        username:{
            type:String,
            required:true,
        },
        
        email:{
            type:String,
            required:true,
            unique:true,
        },
        
        password:{
            type:String,
            required:true,
            
        },
        mobilenumber:{
            type:String,
            
         
        },
       address: {
        type:String
        },
        isAdmin:{
            type:Boolean,
            default:false
            
        },

    }
    ,
    {timestamps:true}
)

const User = mongoose.model("User",UserSchema);

export default User;