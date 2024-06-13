const express = require("express");
// const page = require('./index.html');
const app = express();


// console.dir(app);

let port = 8080;

app.listen(port, () => {
    console.log(`I'm here on ${port}`);
});

app.get("/search", (req, res) => {
    const File_name = '/index.html';
    res.sendFile(__dirname + File_name);
    // res.send("Transmission Succesfull ... ");    // Because of this line
    console.log("Sent ... ");
})

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`Special User @${username} with id @${id}`);
    console.log(req.params);
})


// All rounder request
// app.use((req, res) => {
//     console.log(`Request received on ${port}`);
//     // console.log(`${req}`);
//     // console.log(req);

//     res.send(`Hey I'm Here! Where are You`);
//     // res.send(page);   // Giving error
// });