import express from "express"

import dotenv from "dotenv"
import connectDB from "./config/db.js";
import AuthRouter from "./routes/auth.js"
import userRouter from "./routes/user.js"
import productRouter from "./routes/product.js"
import cartRouter from "./routes/cart.js"
import orderRouter from "./routes/order.js"
import bodyParser from "body-parser"
import cors from "cors"
dotenv.config()

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))
app.use(cors())

connectDB()




app.use("/api/auth",AuthRouter)
app.use("/api/users",userRouter)
app.use("/api/products",productRouter)
app.use("/api/carts",cartRouter)
app.use("/api/orders",orderRouter)
app.get('*',(req,res,next)=>{
    res.status(404).json({
      message:'bad request'
    })
  })
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("Backend server is running on",PORT);
})