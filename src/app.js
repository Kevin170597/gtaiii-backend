const express = require("express");
const app = express();

var port = process.env.PORT || 3000;

app.use(express.json());

app.use(require("./routes/employees"));

app.listen(port, () => console.log("Server running at port 3000"));