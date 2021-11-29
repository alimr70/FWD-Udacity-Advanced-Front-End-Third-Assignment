import { jsTest } from './js/jsTest'
import serverTest from './js/serverTest'
console.log("Yaaay it was built successfuly!")
const btn = document.getElementById("Btn")
btn.addEventListener("click", () => {
  jsTest()
})

window.addEventListener("load", () => {
  serverTest()
})