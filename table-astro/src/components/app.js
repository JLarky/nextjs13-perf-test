import pokemon from "../data.json";

document.addEventListener("click", (e) => {
  if (e.target.tagName !== "A" || e.target.getAttribute("href") !== "#") {
    return;
  }
  const name = e.target.textContent;
  alert(JSON.stringify(pokemon.find((p) => p.name === name)));
});
