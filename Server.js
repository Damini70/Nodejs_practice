const express=require("express");
const app=express();
const MenuItem=require("./models/MenuItem")
const personRoutes=require("./Routes/personRoutes");
const menuRoutes=require("./Routes/menuItemsRoutes")
const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/menuitems", {
   
  }).then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));
  
app.use(express.json());



app.use("/",menuRoutes);
app.use("/person",personRoutes);







app.listen("3000",()=>{
    console.log("connected")
})




