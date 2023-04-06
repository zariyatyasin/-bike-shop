import express from "express"
import { verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin } from "./verifyToken.js";
import Order from "../Models/Order.js"
const router = express.Router();

router.post("/",verifyToken,async(req,res)=>{
    const newOrder = new Order(req.body)

    try {

        const saveOrder = await newOrder.save();

        res.status(200).json(saveOrder)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put("/:id",verifyTokenAndAdmin, async(req,res)=>{
   

    try {
        const updateOrder = await Order.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {new:true})
       

        res.status(200).json(updateOrder)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete("/:id",verifyTokenAndAdmin,async(req,res)=>{
    try {
        await Order.findOneAndDelete(req.params.id)
        res.status(200).json("Orderas been Deleted")
    } catch (error) {
        res.status(500).json(error)
    }
   
   })

router.get("/find/:userId", verifyTokenAndAuthorization, async(req,res)=>{
    try {
        const order= await Order.find({userId:req.params.id})
       
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error)
    }
   
   })
router.get("/", verifyTokenAndAdmin, async(req,res)=>{
    try {
        const order= await Order.find()
       
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json(error)
    }
   
   })

   //get montly income
router.get("/income", verifyTokenAndAdmin, async(req,res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
   
   })

export default router