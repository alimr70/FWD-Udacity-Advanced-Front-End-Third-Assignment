import "./styles/resets.scss"
import "./styles/nav.scss"
import "./styles/header.scss"
import "./styles/main.scss"
import "./styles/form.scss"
import "./styles/results.scss"
import "./styles/footer.scss"
import "./styles/loading.scss"

import isServerLive from './js/isServerLive'
import { hideLoading, showLoading, showResults } from './js/helpers'
const form = document.querySelector("#main-form")
const formText = document.querySelector("#form-text")
const resultsDiv = document.querySelector("#results")

isServerLive(document.body)

form.addEventListener("submit", async(e) => {
  e.preventDefault()
  try {
    showLoading(resultsDiv)

    const results = await axios({
      method: "post",
      url: "http://localhost:8081/analyze",
      data: {
        text: formText.value
      }
    })

    hideLoading(resultsDiv)

    formText.value = ""

    resultsDiv.innerHTML = showResults(results.data)

  } catch (err) {
    console.log(err)
    alert("Sorry something went wrong!")
  }
})