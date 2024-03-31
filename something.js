const express = require("express"); 
const app = express(); 

app.get("/health_checkup", function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (username != "shauray" || password != "pass") {
       res.status(400).json({
        msg: "this is not happening"
       })
       return
    }
       
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({
            msg: "this is not happening"
           })
           return
        } 
    res.json({
        msg: "your kidney is fine"
    })
});