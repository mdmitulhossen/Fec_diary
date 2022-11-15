import mongoose from "mongoose";
const {Schema} = mongoose;

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String
        
    },
    photos:{
        type:String
    },
    number:{
        type:Number
        
    }
});

export default mongoose.model("Students",StudentSchema);