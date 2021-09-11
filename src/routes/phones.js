const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");

router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM phones", (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get("/:city", (req, res) => {
    mysqlConnection.query("SELECT * FROM phones where city=?", [req.params.city], (err, rows, fields) => {
        if(!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    });
});

module.exports = router;