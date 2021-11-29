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
  res.json("Server test is successful")
})

app.get("/analyze", async(req, res) => {
  const example = "President Joe Biden's attempts to limit the spread of the new Omicron Covid-19 variant begins on Monday with new US restrictions on travel from South Africa and seven other countries taking effect, as his administration seeks to assure Americans that they are moving swiftly to try to contain the threat"
  const text = req.body.text || example

  try {
    const request = await axios({
      method: 'post',
      url: 'https://api.meaningcloud.com/sentiment-2.1',
      headers: { 'Content-Type': 'Content-Type' },
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
})