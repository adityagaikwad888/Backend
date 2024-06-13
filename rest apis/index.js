const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


app.listen(port, () => {
    console.log("l ... ");
});

// class post {
//     username;
//     content;
//     constructor(username, content){
//         this.username = username;
//         this.content = content;
//     }
// }

let posts = [
    {
        username: "Michael",
        content: "Hey there! I'm michael the Gangstar Los-Sentoss"
    },
    {
        username: "CJ",
        content: "Wassup! I'm CJ monster of San-Anriase"
    }, {
        username: "Teno",
        content: "Respect! I'm Teno the space ninja of War-Frame"
    }
]

app.get("/posts", (req, res) => {
    // res.send("wassup");
    if (posts)
        res.render("posts.ejs", { posts });
    else
        res.render("error.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({
        username,
        content
    })
    res.send("Posted");
});

app.get("/posts/new", (req, res) => {
    res.render("new_post.ejs");
});

// app.get("/:wrong", (req, res) => {
//     res.render("error.ejs");
// });`