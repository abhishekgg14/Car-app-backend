const mongoose=require("mongoose")


const carSchema=new mongoose.Schema(
    {
        registerNo:String,
        model:String,
        fuel:String,
        engineCapacity:String
    }
)

module.exports=mongoose.model("car",carSchema)