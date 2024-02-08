const express=require("express")
const carModel=require("../models/carModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let car=new carModel(data)
    let result=await car.save()
    res.json({
        status:"success"
    })
})

router.get("/view",async(req,res)=>{
    let data=await carModel.find()
    res.json(data)
})

router.post("/search",async(req,res)=>{
    let input=req.body
    let data=await carModel.find(input)
    res.json(data)
})

module.exports=router