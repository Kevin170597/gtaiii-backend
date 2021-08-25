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

router.get("/guns/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM guns WHERE id=?", [req.params.id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err)
        }
    });
});

router.get("/bands", (req, res) => {
    mysqlConnection.query("SELECT * FROM bands", (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

router.get("/bands/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM bands WHERE id=?", [req.params.id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err)
        }
    });
});

router.get("/vehicles", (req, res) => {
    mysqlConnection.query("SELECT * FROM vehicles", (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err)
        }
    });
});

router.get("/vehicles/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM vehicles WHERE id=?", [req.params.id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.get("/missions", (req, res) => {
    mysqlConnection.query("SELECT * FROM missions", (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get("/missions/:owner", (req, res) => {
    mysqlConnection.query("SELECT * FROM missions WHERE owner=?", [req.params.owner], (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get("/missions/city/:city", (req, res) => {
    mysqlConnection.query("SELECT * FROM missions WHERE city=?", [req.params.city], (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get("/phones", (req, res) => {
    mysqlConnection.query("SELECT * FROM phones", (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get("/phones/:city", (req, res) => {
    mysqlConnection.query("SELECT * FROM phones where city=?", [req.params.city], (err, rows, fields) => {
        if(!err) {
            res.json(rows)
        } else {
            console.log(err)
        }
    });
});

router.get("/phonemissions", (req, res) => {
    mysqlConnection.query("SELECT * FROM phone_missions", (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});



module.exports = router;