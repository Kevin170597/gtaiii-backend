const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");

router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM phone_missions", (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get("/:owner", (req, res) => {
    mysqlConnection.query("SELECT * FROM phone_missions where owner=?", [req.params.owner], (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

module.exports = router;