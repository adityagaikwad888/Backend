const express = require("express");
const web = express();
const path = require("path");
const instagram_data = require(__dirname + "/data.json");

web.set("views", path.join(__dirname, "views"));
web.set("view engine", "ejs");
web.use(express.static(path.join(__dirname, "public")));

let port = 8080;

web.listen(port, (req, res) => {
    console.log(`listing on ${port}`);
});
web.get("/home", (req, res) => {
    // let date = instagram_data[dogs];
    res.render("home.ejs", { data: instagram_data });
})
web.get("/:username", (req, res) => {
    // res.send("working");
    let { username } = req.params;
    let data = instagram_data[username];
    if (data)
        res.render("index.ejs", { username, data: data });
    else {
        res.render("error.ejs");
    }
    console.log(data);
});