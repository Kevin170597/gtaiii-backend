const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");

router.get("/", (req, res) => {
    res.send("Hello world")
});

router.get("/items", (req, res) => {
    mysqlConnection.query("SELECT * FROM items_basics", (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

router.get("/items/:id", (req, res) => {
    
    mysqlConnection.query("SELECT * FROM items_basics WHERE id=?", [req.params.id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err)
        }
    });
});

router.get("/guns", (req, res) => {
    mysqlConnection.query("SELECT * FROM guns", (err, rows, field) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

module.exports = router;