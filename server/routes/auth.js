import express from "express"
import User from "../Models/User.js"
import CryptoJS from "crypto-js";
import  jwt   from "jsonwebtoken";
const router = express.Router();
//Register

router.post("/register", async (req,res)=>{
    try {
        const {email} = req.body;
     
        const exitsUser= await User.findOne({email})
        if(exitsUser){
          
           return res.status(400).json("user already exits")
        }
    var hash = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
  

  
    const saveUser = await User.create({
        username:req.body.username,
        email:req.body.email,
        password:hash,
      
    })
    if(saveUser){
        res.status(201).json({
            id:saveUser._id,
         username:saveUser.username,
         email:saveUser.email,
 
        })
    }
       
   } catch (error) {
    res.status(500).json(error)
   }
})
 //LOGIN

 router.post("/login",async(req,res)=>{
     try {
        const user = await User.findOne(
            {
                email: req.body.email
            }
        );

 
        if(!user){
            return res.status(401).json("Wrong User Email");
        }

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
 

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
 
        const inputPassword = req.body.password;
        
 
           

            if(originalPassword != inputPassword ){
                return  res.status(401).json("Wrong Password");
            }

        const accessToken = jwt.sign(
        {
            id: user._id,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SEC,
            {expiresIn:"3d"}
        );
  
        const { password, ...others } = user._doc;  
        res.status(200).json({...others, accessToken});
         
      
         
     } catch (error) {
        res.status(500).json(error)
     }

 })

export default router