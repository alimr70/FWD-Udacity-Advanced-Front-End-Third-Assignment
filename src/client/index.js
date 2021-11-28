import { jsTest } from './js/jsTest';
console.log("Yaaay it was built successfuly!");
const btn = document.getElementById("Btn");
btn.addEventListener("click", () => {
  jsTest()
})

export { jsTest }