import express from "express";
import { createStudent, deleteStudent, getAllStudent, getStudent, updateStudent } from "./../controllers/students.js";
import { verifyToken } from "./../Utils/verifyTokens.js";

const router =express.Router();

router.get("/cheackauthentication",verifyToken,(req,res,next)=>{
    res.send("you logged in");
})

//Create
router.post("/",createStudent);

//update

router.put("/:id",updateStudent);

//Delete

router.delete("/:id",deleteStudent);

//get

router.get("/:id",getStudent);

//GET ALL

router.get("/",getAllStudent);


export default router;