const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");

router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM missions", (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get("/:owner", (req, res) => {
    mysqlConnection.query("SELECT * FROM missions WHERE owner=?", [req.params.owner], (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get("/city/:city", (req, res) => {
    mysqlConnection.query("SELECT * FROM missions WHERE city=?", [req.params.city], (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;