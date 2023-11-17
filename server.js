const express = require("express");
const app = express();
const path = require("path");
app.get("/html",(req,res)=>{
res.sendFile(path.join(__dirname,"index.html"));
})
app.get("/html1",(req,res)=>{
    res.sendFile(path.join(__dirname,"index1.html"));
    })
 app.get("/html2",(req,res)=>{
    res.sendFile(path.join(__dirname,"index2.html"));
})
app.listen(3978,()=>{
    console.log("runing");
})
