const express = require("express");
const path = require("path")
require(`dotenv`).config(); // Variables de entorno

const PORT = process.env.PORT;

const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
})

app.listen(PORT, () => {
    console.log(`Server on port: ${PORT}`)
})

console.log(process.env.PORT)