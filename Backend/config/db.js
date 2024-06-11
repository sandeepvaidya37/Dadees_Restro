import mongoose from "mongoose";
import mo from "mongoose";

const dbURI = process.env.MONGODB_URL;

 export const connectDB = async () => {
    await mongoose.connect(dbURI).then(()=>{
        console.log("connected to database");
    });
}