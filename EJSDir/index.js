const express = require("express");
const server = express();

// This for error occured when we run server from other directory
const path = require("path");
server.set("views", path.join(__dirname + "/views"));

let port = 8080;

server.set("view engine", "ejs");


server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

server.get("/dice_value/:id", (req, res) => {
    let DiceValue = Math.floor(Math.random() * 6) + 1;
    res.render("index.ejs", { value: DiceValue });
});

server.get("/profile/:name/:id", (req, res) => {
    let { name, id } = req.params;
    res.render("templete1.ejs", { Name: name });
    // console.log("Rendered Succesfully");
});
