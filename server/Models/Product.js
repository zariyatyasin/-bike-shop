import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
    name:{
        type:String,required:true
    },
    rating:{
        type:Number,required:true
    },
    Comment:{
        type:String,required:true
    }
},{
    timestamps:true
})

const ProductSchema = new mongoose.Schema({
//     user:{
//    type:mongoose.Schema.ObjectId,
//    required:true,
//    ref:"User"
//     },
    name:{
        type:String,
        required:true
    },
    images:{type:Object},
    brand:{
        type:String,
       
    },
    category: { type: Array },
    description:{
        type:String,
        required:true,
      
    },
    // reviews:[reviewsSchema],
    // rating:{
    //     type:Number,
    //     required:true,
    //     default:0
      
    // },
    // numReviews:{
    //     type:Number,
    //     required:true,
    //     default:0
      
    // },
    price:{
        type:String,
        required:true,
        default:0
      
    },
    countInStock:{
        type:Number,
        required:true,
        default:0
      
    },
  
   
},{
    timestamps:true
})

const Product = mongoose.model("Prodcut",ProductSchema);

export default Product;