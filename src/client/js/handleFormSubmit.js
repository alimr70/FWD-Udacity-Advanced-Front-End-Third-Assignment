const form = document.querySelector("#main-form")
const formText = document.querySelector("#form-text")
const resultsDiv = document.querySelector("#results")

form.addEventListener("submit", async(e) => {
  e.preventDefault()
  if (formText.value.length === 0) {
    alert("Please give me some news!")
  } else {
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
      if (err) {
        console.log(err)
        alert("Sorry something went wrong!")
      }
    }
  }
})

const showLoading = () => {
  const loadingEl = document.createElement("div")
  loadingEl.id = "loading"
  loadingEl.innerText = "Loading..."
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
    <p>Confidence Score: ${confidence}%</p>
    <p>Polarity: ${ScoreTags[score_tag]}</p>
    <p>Subjectivity: ${subjectivity}</p>
    <p>Agreement: ${agreement}</p>
    <p>Irony: ${irony}</p>
  `
}