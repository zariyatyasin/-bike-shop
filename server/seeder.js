 
import connectDB from "./config/db.js"
import User from "./Models/User.js"
import dotenv from "dotenv"
import userData from "./mockuserData.js"
import BikeData from "../my-app/src/Data/BikeData.jsx"
import Product from "./Models/Product.js"
 
dotenv.config()
connectDB()


const importData = async ()=>{
    try {
      
        // await User.deleteMany()
         

    await Product.insertMany(BikeData);

 

     
      
        
       
  console.log("Data has been imported");
        
    } catch (error) {
        console.log(error.message);
    }
}
 

if(process.argv[2]==='-d'){
    DeletetData()
}
else{
    importData()
}