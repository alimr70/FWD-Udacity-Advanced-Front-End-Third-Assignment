const express = require("express")
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")

dotenv.config()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("dist"))

app.get("/", (req, res) => {
  res.sendFile("index.html")
})

app.get("/test", (req, res) => {
  res.json("Server test is successful")
})

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`===> Server is running on port ${PORT}`)
})