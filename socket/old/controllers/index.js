var express = require('express');




var mainPage=(req,res)=>{

res.render('index',{title:"Client Server Chat"});
    };




            
module.exports = {
    mainPage
    };