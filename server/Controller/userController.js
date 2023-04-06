import CryptoJS from "crypto-js";
import User from "../Models/User.js";
import  jwt   from "jsonwebtoken";
export const UpdateUser = async(req,res)=>{
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
          req.body.password,
          process.env.PASS_SEC
        ).toString();
      }
    
      try {
       
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
 
        
        const accessToken =jwt.sign(
          {
              id: updatedUser._id,
              isAdmin: updatedUser.isAdmin,
          }, process.env.JWT_SEC
        )
        const { ...others } = updatedUser._doc;  
        res.status(200).json({...others,accessToken});
      } catch (err) {
        res.status(500).json(err);
      }
  
}

export const DeleteUser = async(req,res)=>{
    try {
        await User.findOneAndDelete(req.params.id)
        res.status(200).json("User has been Deleted")
    } catch (error) {
        console.log(error);
    }
   
   }
export const getUser = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others } = user._doc;  
        res.status(200).json({...others });
    } catch (error) {
        console.log(error);
    }
   
   }
export const getAllUser = async(req,res)=>{
  const query = req.query.new
    try {
        const user = query ? await User.find().sort({_id:-1}).limit(5): await User.find()
 
        res.status(200).json(user.slice(0, 10));
    } catch (error) {
        console.log(error);
    }
   
   }
export const stats = async(req,res)=>{
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
   
   }