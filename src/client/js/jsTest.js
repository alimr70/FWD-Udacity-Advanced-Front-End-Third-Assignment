const jsTest = () => {
  const p = document.createElement('p');
  p.innerText = "This is a funtion that proves that webpack works";
  document.body.appendChild(p);
}

export { jsTest };