const express=require("express");
const app=express();
const MenuItem=require("./models/MenuItem")
const personRoutes=require("./Routes/personRoutes");
const menuRoutes=require("./Routes/menuItemsRoutes")
const mongoose=require("mongoose");
require("dotenv").config();
const PORT=process.env.PORT||3000;
const DB=process.env.PROD_DB_URL;
const LOCAL=process.env.LOCAL_DB_URL;




mongoose.connect(DB, {
   
    }).then(() => console.log("MongoDB connected"))
      .catch(err => console.error("MongoDB connection error:", err));
  
app.use(express.json());



app.use("/",menuRoutes);
app.use("/person",personRoutes);







app.listen(PORT,()=>{
    console.log("connected")
})




