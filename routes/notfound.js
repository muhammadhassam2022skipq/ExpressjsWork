const express = require("express");
const router = express.Router();

router.get("/error", (req, res) => {
    res.render("notfound");
})

module.exports = router;