const express = require('express');
const app = express();


app.get("/",(req,res)=>{
    return res.json({message:"home"});
})


app.get("/test",(req,res)=>{
    return res.json({message:"test"});
})

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("App Running "+port);
});