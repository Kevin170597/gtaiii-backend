const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = require("../database");

router.get("/", (req, res) => {
    db.query("SELECT * FROM users", (err, rows, filed) => {
        res.json(rows)
    });
});

router.post("/register", (req, res) => {
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)", [user, email, hash], (err, result) => {
            console.log(err)
            console.log(result)
        });
    });
});

router.post("/login", (req, res) => {
    const user = req.body.user;
    const password = req.body.password;
    db.query("SELECT * FROM users WHERE name = ?", user, (err, result) => {
        if (err) {
            res.send({err: err})
        }
        if (result > [0]) {
            bcrypt.compare(password, result[0].password, (error, response) => {
                if (response) {
                    req.session.user = result;
                    res.send(result);
                } else {
                    res.send({message: "Wrong name or password!"});
                }
            });
        } else {
            res.send({message: "User doesn't exist"});
        }
    });
});

router.get("/login", (req, res) => {
    req.session.user ? res.send({loggedIn: true, user: req.session.user}) : res.send({loggedIn: false});
});

router.get("/logout", (req, res) => {
    req.session.destroy();
})

module.exports = router;