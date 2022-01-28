const express=require("express");
const res = require("express/lib/response");
const port=process.env.port || 8000
const app=express();

app.get("/", function(request, response){
    response.send("<button onclick='alert( `you clicked the button` )'>i am a button</button>")
})

app.get("/contact", function(req,res){
    res.send("contact me at number: 9675984833")
})

app.listen(port,function(){
    console.log("server started on port 1000");
});