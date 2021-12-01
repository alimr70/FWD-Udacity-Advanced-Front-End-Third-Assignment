const form = document.querySelector("#main-form")
const formText = document.querySelector("#form-text")
const resultsDiv = document.querySelector("#results")

form.addEventListener("submit", async(e) => {
  e.preventDefault()
  try {
    showLoading()

    const results = await axios({
      method: "post",
      url: "http://localhost:8081/analyze",
      data: {
        text: formText.value
      }
    })

    hideLoading()

    formText.value = ""

    showResults(results.data)

  } catch (err) {
    console.log(err)
    alert("Sorry something went wrong!")
  }
})

const showLoading = () => {
  const loadingEl = document.createElement("div")
  loadingEl.id = "loading"
  loadingEl.innerHTML = '<div class="lds-roller"><div></div><div></div><div></div>'
  resultsDiv.appendChild(loadingEl)
}

const hideLoading = () => {
  const loadingEl = document.querySelector("#loading")
  resultsDiv.removeChild(loadingEl)
}

const showResults = ({ confidence, score_tag, subjectivity, agreement, irony }) => {
  const ScoreTags = {
    "P+": 'Strong positive',
    "P": 'Positive',
    "NEU": 'Neutral',
    "N": 'Negative',
    "N+": 'Strong negative',
    "NONE": 'Without polarity',
  }

  resultsDiv.innerHTML = `
    <h3>Results</h3>
    <p>Confidence Score: <span>${confidence}%</span></p>
    <p>Polarity: <span>${ScoreTags[score_tag]}</span></p>
    <p>Subjectivity: <span>${subjectivity}</span></p>
    <p>Agreement: <span>${agreement}</span></p>
    <p>Irony: <span>${irony}</span></p>
  `
}