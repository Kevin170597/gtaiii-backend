const express = require("express");
const router = express.Router();

//const mysqlConnection = require("../database");

/*router.get("/items", (req, res) => {
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

router.post("")*/

router.get("/", (req, res) => {
    res.send("Hello world")
})

module.exports = router;