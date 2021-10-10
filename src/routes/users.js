const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = require("../database");

const { validationResult } = require("express-validator");
const registerValidator = require("../validators/registerValidator");
const loginValidator = require("../validators/loginValidator");

router.get("/", (req, res) => {
    db.query("SELECT * FROM users", (err, rows, filed) => {
        res.json(rows)
    });
});

router.post("/register", registerValidator, (req, res) => {
    const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty()) {
        return res.send(errors.mapped())
    } else {
    const user = req.body.user;
    const email = req.body.email;
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        db.query("INSERT INTO users (name, email, password) VALUES (?,?,?)", [user, email, hash], (err, result) => {
            res.send({
                result: result,
                success: "success"
            })
        });
    });
    }
});

router.post("/login", loginValidator, (req, res) => {
    const errors = validationResult(req);
    console.log(errors)
    if (!errors.isEmpty()) {
        return res.send(errors.mapped())
    }
    
    const user = req.body.user;
    db.query("SELECT * FROM users WHERE name = ?", user, (err, result) => {
        if (err) {
            res.send({err: err})
        }
        if (result > [0]) {
            req.session.user = result;
            res.send({
                result: result,
                success: "success"
            });
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