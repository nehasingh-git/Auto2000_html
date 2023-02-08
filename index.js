var express = require("express");
const cors = require("cors");

var app = express();

app.use(cors({
    // origin: 'http://127.0.0.1:5500'
    origin: '*'
}));


app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});