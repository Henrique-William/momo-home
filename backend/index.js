const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("teste");
})

app.listen(5000, (req, res) => {
    console.log("Rodando")
})