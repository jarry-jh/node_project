
const express=require('express');
var app=express();
const port=5000;
app.get('/',(req,res)=>{
    res.send("welcome to express");
});
app.get('/about',(req,res)=>{
    res.send("welcome to about page");
});
app.get('/getapi',(req,res)=>{
    var obj={
        name:"joy",
        email:"joy@mailinator.com",
    };
    res.json(obj);
});


app.listen(port);