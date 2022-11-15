import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import studentRoute from "./routes/student.js";
import cookieParser from "cookie-parser";
import cors from "cors"

const app=express();
dotenv.config();

//Connect mongoDB
const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!")
    }catch(error){
       throw error;
    }
};


//if mongoDB disconnected/connected
mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
})



//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use("/api/auth",authRoute);
app.use("/api/student",studentRoute);

app.use((err,req,res,next)=>{
    const errStatus = err.status || 500;
    const errMassage = err.message || "somthing wrong";

    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errMassage,
        stack: err.stack
    })
})

//Run
app.listen(8000,()=>{
    connect();
    console.log("Connected to backEnd!")
})