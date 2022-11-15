import Students from "../models/Students.js";

//Creaate 
export const createStudent = async(req,res,next)=>{
    const NewStudent = new Students(req.body);

  try{
    const saveStudent = await NewStudent.save();
    res.status(200).json(saveStudent);
  }catch(error){
    next(error)
  }
}

//update
export const updateStudent = async(req,res,next)=>{
    
  try{
    const updateStudent = await Students.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true});
    res.status(200).json(updateStudent);
  }catch(error){
    next(error)
  }
}

//delete

export const deleteStudent = async(req,res,next)=>{
    
  try{
    await Students.findByIdAndDelete(req.params.id);
    res.status(200).json("Student has been deleted....");
  }catch(error){
    next(error)
  }
}

//get

export const getStudent = async(req,res,next)=>{
    
  try{
    const student=await Students.findById(req.params.id);
    res.status(200).json(student);
  }catch(error){
    next(error)
  }
}

//getAll

export const getAllStudent = async(req,res,next)=>{
   
  try{
    const students = await Students.find();
    res.status(200).json(students);
  }catch(error){
    next(error)
  }
}