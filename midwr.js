const express = require("express") 
const app = express(); 
app.use(express.json); 

app.get("/",aadhartaken,bloodpressure,bloodtest,function(req,res){
    res.send("you are fine lil bro")
})

function aadhartaken(req,res,next) {
    const havestuff = req.query.havestuff
 if ( havestuff = false) { 
    res.send("if you're a broke boy just say so")
 } 
 else {next()}
}

const bloodtest = (req,res,next) => {
    const bt = req.query.bt
    if (bt == "std") {
        res.send("no checkup for whores")
    } else {
        next() 
    }
}

const bloodpressure = (req,res,next) => {
    const bp = req.query.bp 
    if (bp < 120) {
        res.send("bp too low, try again later")
    } else{ 
        next()
    }
}


app.listen(3000); 