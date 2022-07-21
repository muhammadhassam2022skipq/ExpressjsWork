const express = require("express");
const router = express.Router();
var x=0;
var y=0;
const products= [];

router.get("/contact", (req, res) => {
    res.render("contact");
})
router.post("/contact", (req, res) => {
    x=parseInt(req.body.pname);
    y= parseInt(req.body.id);
    console.log(y);
    res.render("contact", {
        products:[
            {fname : "x"},
            {ID: y}
        ]
    })
});

module.exports = router;