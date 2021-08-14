const express = require("express");
const app = express();

app.set("port", process.env.PORT || 3030)

app.use(express.json());

app.use(require("./routes/employees"));

app.listen(3030, () => console.log("Server running at port 3030"));