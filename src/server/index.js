const express = require("express")
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")
const axios = require("axios")

dotenv.config()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static("dist"))

app.get("/", (req, res) => {
  res.sendFile("index.html")
})

app.get("/test", (req, res) => {
  res.status(200).json("success")
})

app.post("/analyze", async(req, res) => {
  const text = req.body.text

  try {
    const request = await axios({
      method: 'post',
      url: 'https://api.meaningcloud.com/sentiment-2.1',
      headers: { 'Content-Type': 'multipart/form-data' },
      params: {
        key: process.env.API_KEY,
        lang: "auto",
        txt: text,
      }
    })
    res.json(request.data)
  } catch (err) {
    console.log(err)
    res.status(500)
  }
})

const PORT = process.env.PORT || 8081

app.listen(PORT, () => {
  console.log(`===> Server is running on port ${PORT}`)
  console.log(`===> http://localhost:${PORT}`)
})