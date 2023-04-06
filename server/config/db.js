import mongoose from "mongoose"

const connectDB =async () => {
  try {
    
  const conn = await mongoose.connect(process.env.MONGO_URL)
  console.log("MongoBD connected Host:",conn.connection.host);

    } catch (error) {
        console.log("Error:",error.message);
    }




}

export default connectDB;