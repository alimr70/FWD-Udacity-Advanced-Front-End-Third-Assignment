import { jsTest } from './js/jsTest'
import serverTest from './js/serverTest'
import analyzeText from './js/analyzeText'
console.log("Yaaay it was built successfuly!")
const btn = document.getElementById("Btn")
btn.addEventListener("click", () => {
  jsTest()
})

window.addEventListener("load", () => {
  serverTest()
  analyzeText()
})