 const express = require("express");
const app = express();

app.use(express.json());

app.get("/", aadhartaken, bloodpressure, bloodtest, function(req, res) {
  res.json({ msg:"your fine"});
});

function aadhartaken(req, res, next) {
    const havestuff = req.query.havestuff;
    if (havestuff === "false") {
        res.json({ msg:"if you're a broke boy just say so"});
    } else {
        next();
    }
}

function bloodtest(req, res, next) {
    const bt = req.query.bt;
    if (bt === "std") {
      res.json({ msg:"it's not a whore house!!"});
    } else {
        next();
    }
}

function bloodpressure(req, res, next) {
    const bp = req.query.bp;
    if (bp < 120) {
      res.json({ msg:"bp too gohgh hg h"});
    } else {
        next();
    }
}

app.listen(3000);