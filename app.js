const express = require("express");
const bodyParser= require ("body-parser");
const homeRoute = require ("./routes/home");
// const aboutRoute = reqiure ("./routes/about");
const productRoute= require("./routes/Product");
const errorRoute= require("./routes/notfound");
const contactRoute= require("./routes/contact");
//creating express app
const app= express();
// body parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.set ("views", "views");
app.set("view engine", "ejs");


//using module routes
app.use (homeRoute);
// app.use(aboutRoute);
app.use("/shopping",productRoute);
app.use (errorRoute);
app.use (contactRoute);

// Listening to the port
app.listen (3000, (req, res)=> {
    console.log ("Listening on port 3000");
})