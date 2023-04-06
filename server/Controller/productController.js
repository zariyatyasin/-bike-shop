import cloudinary from "../config/uploadImage.js";
import Product from "../Models/Product.js"

export const createProduct = async(req,res)=>{
  
    const {name,images,category,price,countInStock,description} = req.body;
  
    try {
      if(images){
         const uploadImage= await cloudinary.uploader.upload(images,{
               upload_preset:"rstationProduct"
          })
          if(uploadImage){
              const product = new Product({name,images:uploadImage,category,price,countInStock,description})
              const saveProduct = await product.save()
              res.status(200).json(saveProduct)
          }

     
      }
  
        
        
    } catch (error) {
        res.status(500).json(error)
    }
}
export const UpdateProduct = async(req,res)=>{
   

    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },
        {new:true})
       

        res.status(200).json(updateProduct)
        
    } catch (error) {
        res.status(500).json(error)
    }
}



export const DeleteProduct = async(req,res)=>{
    try {
       const product= await Product.findById(req.params.id)
       const imgId = product.images.public_id;
       if (imgId) {
           await cloudinary.uploader.destroy(imgId);
       }
       await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been Deleted")
    } catch (error) {
        res.status(500).json(error)
    }
   
   }

export const getProduct = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)
       
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error)
    }
   
   }
export const getAllProduct = async(req,res)=>{
  const queryPro = req.query.new
  const queryCat = req.query.category
  const queryBrand = req.query.brand
   
    try {
        let products;
        if(queryPro){
            products= await Product.find().sort({createdAt:-1}).limit(5);
        }else if(queryCat){
            products = await Product.find({
                category:{
                    $in:[queryCat]
                }
            })
        }
        else if(queryBrand){
            products = await Product.find({
                brand:{
                    $in:[queryBrand]
                }
            })
        }
        else{
            products= await Product.find()
        }
     
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error)
    }
   
   }