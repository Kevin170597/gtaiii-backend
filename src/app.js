const express = require("express");
const app = express();
const cors = require("cors");

var port = process.env.PORT || 3030;

app.use(express.json());

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", (req, res) => {
    res.send("GTA III Guide to 100%")
})

app.use("/items", require("./routes/items"));
app.use("/guns", require("./routes/guns"));
app.use("/bands", require("./routes/bands"));
app.use("/vehicles", require("./routes/vehicles"));
app.use("/missions", require("./routes/missions"));
app.use("/phones", require("./routes/phones"));
app.use("/phonemissions", require("./routes/phonemissions"));
app.use("/rc", require("./routes/rc_toyz"));
app.use("/4x4", require("./routes/4x4"));
app.use("/rampages", require("./routes/rampages"));
app.use("/packages", require("./routes/packages"));
app.use("/jumps", require("./routes/jumps"));
app.use("/garage", require("./routes/garages"));

app.listen(port, () => console.log("Server running at port 3030"));