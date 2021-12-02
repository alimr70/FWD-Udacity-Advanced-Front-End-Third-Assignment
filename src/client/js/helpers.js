export const showLoading = (target) => {
  const loadingEl = document.createElement("div")
  loadingEl.id = "loading"
  loadingEl.innerHTML = '<div class="lds-roller"><div></div><div></div><div></div>'
  return target.appendChild(loadingEl)
}

export const hideLoading = (target) => {
  const loadingEl = document.querySelector("#loading")
  return target.removeChild(loadingEl)
}

export const showResults = ({ confidence, score_tag, subjectivity, agreement, irony }) => {
  const ScoreTags = {
    "P+": 'Strong positive',
    "P": 'Positive',
    "NEU": 'Neutral',
    "N": 'Negative',
    "N+": 'Strong negative',
    "NONE": 'Without polarity',
  }

  return `<h3>Results</h3><p>Confidence Score: <span>${confidence}%</span></p><p>Polarity: <span>${ScoreTags[score_tag]}</span></p><p>Subjectivity: <span>${subjectivity}</span></p><p>Agreement: <span>${agreement}</span></p><p>Irony: <span>${irony}</span></p>`
}