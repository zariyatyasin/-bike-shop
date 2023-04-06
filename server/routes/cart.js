import express from "express"
import { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin } from "./verifyToken.js";
import Cart from "../Models/Cart.js"
const router = express.Router();

router.post("/",verifyToken,async(req,res)=>{
    const newCart = new Cart(req.body)

    try {

        const saveCart = await newCart.save();

        res.status(200).json(saveCart)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id",verifyTokenAndAuthorization, async(req,res)=>{
   

    try {
        const updateCart = await Cart.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {new:true})
       

        res.status(200).json(updateCart)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
    try {
        await Cart.findOneAndDelete(req.params.id)
        res.status(200).json("Cartas been Deleted")
    } catch (error) {
        res.status(500).json(error)
    }
   
   })

router.get("/find/:userId", verifyTokenAndAuthorization, async(req,res)=>{
    try {
        const cart= await Cart.findOne({userId:req.params.id})
       
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error)
    }
   
   })
router.get("/", verifyTokenAndAdmin, async(req,res)=>{
    try {
        const cart= await Cart.find()
       
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error)
    }
   
   })

export default router