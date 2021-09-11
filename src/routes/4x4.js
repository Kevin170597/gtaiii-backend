const express = require("express");
const router = express.Router();

const mysqlConnection = require("../database");

router.get("/", (req, res) => {
    mysqlConnection.query("SELECT * FROM 4x4", (err, rows, field) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

module.exports = router;