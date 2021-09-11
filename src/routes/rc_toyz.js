const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");

router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM rc_toyz", (err, rows, field) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

module.exports = router;