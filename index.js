let wait = Date.now()+20000;
    while(Date.now()<wait){

    }
const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("waiting route");
})

app.listen(3000,()=>{
    console.log("server is listening at 3000");
})