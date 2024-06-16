const express = require("express");
const server = express();
const path = require("path");
const { faker, da } = require("@faker-js/faker");
const mysql = require("mysql2");
const { resourceUsage } = require("process");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "backend1",
    password: "pass@123"
})

// ~~~ getting random user data // 
// let fake_user = () => {
//     return {
//         UserId: faker.datatype.uuid(),
//         UserName: faker.internet.userName(),
//         Email: faker.internet.email(),
//         Password: faker.internet.password()
//     }
// }

// for single user //

// let q = "INSERT INTO user ( id, username, email, password ) VALUES (?, ?, ?, ?)";
// let user = ["123", "123_newuser", "abc@gmail.com", "abc"];   // just pass user as second argument


// for multiple values //

// let q = "INSERT INTO user ( id, username, email, password ) VALUES ?";
// let users = [["1234", "1234_newuser", "abcd@gmail.com", "abcd"], ["12345", "12345_newuser", "abcde@gmail.com", "abcde"]];

// try {
//     connection.query(q, [users], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     })
// } catch (err) {
//     console.log(err);
// }



// ~~~ For adding data of user in bulk ~~~ //

let bulk_data = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password()
    ]
}

let data = [];

for (let i = 0; i < 100; i++) {
    data.push(bulk_data());
}

// console.log(data);    // for checking 

let q1 = "INSERT INTO user ( id, username, email, password) VALUES ?";

try {
    connection.query(q1, [data], (err, result) => {
        if (err) throw err;
        console.log(result);
    });
} catch (err) {
    console.log(err);
}

let port = 8080;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(express.static(path.join(__dirname, "public")));

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));


server.listen(port, () => {
    console.log("listening ... ");
});

server.get("/", (req, res) => {
    // console.log(fake_user());
})
