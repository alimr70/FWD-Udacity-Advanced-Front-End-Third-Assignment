const apiURL = window.location.origin === "http://localhost:8080" ? "http://localhost:8081" : window.location.origin;

const isServerLive = async(target) => {
  try {
    const res = await axios(apiURL + "/test")
    res.status === 200 && console.log("Connected to server")
  } catch (err) {
    const nav = document.createElement("nav")
    nav.innerText = "Can't connect to the server! You're in offline mode"
    target.appendChild(nav)
  }
}

export default isServerLive