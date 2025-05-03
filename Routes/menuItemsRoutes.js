const express=require("express");
const routes=express.Router();

routes.post("/menu",async(req,res)=>{
    try {
        const item = new MenuItem(req.body);
        const response=await item.save();
        res.send("Data Saved");
        console.log("data saved")
        
    } catch (error) {
        console.log(error)
    }
})
routes.get("/getmenu",async(req,res)=>{
    
    try {
        const item=await MenuItem.find();
        res.status(200).json(item)
    } catch (error) {
       console.log(error) 
    }
})

module.exports=routes;