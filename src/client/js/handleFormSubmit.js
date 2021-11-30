const form = document.querySelector("#main-form")
const formText = document.querySelector("#form-text")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (formText.value.length === 0) {
    alert("Please give me some news!")
  } else {
    axios({
      method: "post",
      url: "http://localhost:8081/analyze",
      data: {
        text: formText.value
      }
    }).then((res) => {
      alert("Request has been made")
      formText.value = ""
    }).catch((e) => {
      alert("Sorry something went wrong!")
    })
  }
})