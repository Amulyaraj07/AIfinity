const express = require("express");
const path = require("path");
const collection = require("./config");
const bcrypt = require('bcrypt');

const app = express();
// convert data into json format
app.use(express.json());
// Static file
app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
//use EJS as the view engine
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/home", (req, res) => {
    res.render("home2");
});
app.get("/login", (req, res) => {
    res.render("login");
});
app.get("/signup", (req, res) => {
    res.render("signup");
});
app.get("/mentor", (req, res) => {
    res.render("mentor");
});
app.get("/res", (req, res) => {
    res.render("res");
});
app.get("/quiz", (req, res) => {
    res.render("quiz");
});
app.get("/contact", (req, res) => {
    res.render("contact");
});

// Register User
app.post("/signup", async (req, res) => {

    const data = {
        name: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    // Check if the username already exists in the database
    const existingUser = await collection.findOne({
        $or: [
            { name: data.name },
            { email: data.email }
        ]
    });

    if (existingUser) {
        res.send('User already exists. Please choose a different username.');
    } else {
        // Hash the password using bcrypt
        const saltRounds = 10; // Number of salt rounds for bcrypt
        const hashedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hashedPassword; // Replace the original password with the hashed one

        const userdata = await collection.insertMany(data);
        console.log(userdata);

        res.render("home");
    }

});

// Login user 
app.post("/login", async (req, res) => {
    try {
        const check = await collection.findOne({ name: req.body.username });
        if (!check) {
            res.send("User name cannot found")
        }
        // Compare the hashed password from the database with the plaintext password
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password);
        if (!isPasswordMatch) {
            res.send("wrong Password");
        }
        else {
            res.render("home2");
        }
    }
    catch {
        res.send("wrong Details");
    }
});


// Define Port for Application
const port = 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});