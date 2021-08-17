const express = require("express");
const app = express();

var port = process.env.PORT || 3030;

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(require("./routes/items"));

app.listen(port, () => console.log("Server running at port 3030"));