const express=require("express")
const carModel=require("../models/carModel")

const router=express.Router()

router.post("/view",async(req,res)=>{
    let data=await carModel.find()
    res.json(data)
})

module.exports=router