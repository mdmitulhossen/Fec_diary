import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
      
},{
    timestamps:true
}
);

export default mongoose.model("users",userSchema);