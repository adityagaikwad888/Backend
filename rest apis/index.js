const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid4 } = require("uuid");
const methodOverride = require("method-override");
let port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


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
        id: uuid4(),
        username: "Michael",
        content: "Hey there! I'm michael the Gangstar Los-Sentoss"
    },
    {
        id: uuid4(),
        username: "CJ",
        content: "Wassup! I'm CJ monster of San-Anriase"
    }, {
        id: uuid4(),
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
    let id = uuid4();
    posts.push({
        id,
        username,
        content
    })
    res.redirect(302, "/posts");
});

app.get("/posts/new", (req, res) => {
    res.render("new_post.ejs");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("in_details.ejs", { p: post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    // let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = req.body.content;
    // alert("Edited Successfully! ")
    res.redirect(302, "/posts");
});

app.get("/posts/:id/delete", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("deleting.ejs", { p: post });
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { p: post });
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.use("/:wrong", (req, res) => {
    res.render("error.ejs");
});