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
const apiURL = window.location.origin === "http://localhost:8080" || window.location.origin === "http://localhost:8081" ? "http://localhost:8081" : "https://news-eval-nlp.herokuapp.com";


isServerLive(document.body)

form.addEventListener("submit", async(e) => {
  e.preventDefault()
  try {
    showLoading(resultsDiv)

    const results = await axios({
      method: "post",
      url: apiURL + "/analyze",
      data: {
        text: formText.value
      }
    })

    hideLoading(resultsDiv)

    formText.value = ""

    resultsDiv.innerHTML = showResults(results.data)

  } catch (err) {
    alert("Sorry something went wrong!")
  }
})