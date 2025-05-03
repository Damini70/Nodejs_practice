const express=require("express");
const router=express.Router();
const Person=require("../models/Person")

const workType=["chef","waiter","manager"];
// to define Route Params (/:id) this is the example of route params

router.put("/:id",async(req,res)=>{
   
    try {
      const updatedItem=await Person.findByIdAndUpdate(req.params.id,req.body,
        {new:true,      // return updated item
        runValidators: true})    //run mongoose validation
      res.status(200).json(updatedItem)
      if (!updatedItem) {
        return res.status(404).json({ message: "Person not found" });
      }
      
    } catch (error) {
   console.log(error);
    }
  })
  router.delete("/:id",async(req,res)=>{
    try {
        const deleteItem=await Person.findByIdAndDelete(req.params.id);
        res.status(200).json("Successfully deleted")
        if(!deleteItem){
            res.status(404).json("person not found")
        }
    } catch (error) {
       console.log(error); 
    }
  })

router.get("/work/:workType",async(req,res)=>{
    const type = req.params.workType.toLowerCase();
    console.log(req.para);
  if(workType.includes(type)){
    try {
        const item=await Person.find({role:type});
        res.status(200).json(item);
      } catch (error) {
       console.log(error)
      }
  }else{
    res.status(404).json("invalid workType")
  }
    
})
router.post("/work/:workType",async(req,res)=>{
    const type = req.params.workType.toLowerCase();
    if (workType.includes(type)) {
        try {
            const item=new Person(req.body);
            await item.save();
            res.send("Data Saved")
        } catch (error) {
           console.log(error); 
        }
    }else{
        res.status(404).json("invalid workType")
    }
})


module.exports=router;