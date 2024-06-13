const express = require("express");
const { register } = require("module");
const server = express();
const path = require("path");
let port = 8080;
// no need to require ejs it always required inside express

server.set("view engine", "ejs");
server.set("views", path.join(__dirname + "/views"));

server.use(express.static(path.join(__dirname + "/public")));


server.use(express.urlencoded({ extended: true }));    // this line for real-reading encoded data from url 
server.use(express.json());


server.listen(port, () => {
    console.log(`listening ... `);
});

server.get("/register", (req, res) => {
    let { username, password } = req.query;
    res.send(username);
    // res.render("/passed_data.ejs", { data: username });
    console.log(`Get res send --- `);
});

server.post("/register", (req, res) => {
    let { data } = req.body;
    res.send(`Standerd response`);
    // res.render("/passed_data.ejs", { data: data });
    console.log(`Post res send --- `);
});
