const btn = document.querySelector("button");
const chuckAPIurl = "https://api.chucknorris.io/jokes/random";
const p = document.querySelector(".piada-container p");

function handleClick(event) {
  event.preventDefault();
  buscarChuckNorris();
}

function buscarChuckNorris() {
  fetch(chuckAPIurl)
  .then((r) => r.json())
  .then((b) => {
    p.innerText = "❝" + b.value + "❞";
  });
}

buscarChuckNorris();
btn.addEventListener("click", handleClick);
