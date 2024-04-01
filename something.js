const express = require("express"); 
const app = express(); 
app.use(express.json)
// app.get("/health_checkup", function(req,res){
//     const username = req.headers.username;
//     const password = req.headers.password;
//     const kidneyId = req.query.kidneyId;

//     if (username != "shauray" || password != "pass") {
//        res.status(400).json({
//         msg: "this is not happening"
//        })
//        return
//     }
       
//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({
//             msg: "this is not happening"
//            })
//            return
//         } 
//     res.json({
//         msg: "your kidney is fine"
//     })
// });

function newmiddleware(req,res,next) {
    const username = req.headers.username;
    const password = req.headers.password;
    if (username != "shauray" || password != "pass") {
        res.status(400).json({
            msg: "not happening buddy!"
        })
    } else {
        next()
    }

};

function secondmiddleware(req,res,next) {
    const kidneyId = req.query.kidnewId
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg: "not happening buddy!"
        })
    } else {
        next()
    }
}

app.use(newmiddleware)
app.use(secondmiddleware)

app.get("/health_checkup",newmiddleware,secondmiddleware,function(req,res){
    res.json({
        msg: "u r really happenig my frnd"
    })
})


//global catches at the end of the basic code 
app.use((error,req,res,next) => {
    res.status(500).json({
        msg:"Oh no! error's here"
    })
})

app.listen(3000) 