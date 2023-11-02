const inputCep = document.querySelector("#cep");
const inputBtn = document.querySelector("#botao");
const itens = document.querySelectorAll(".itens");
inputBtn.addEventListener("click", handleClick);
let cepJson;

function handleClick(event) {
  event.preventDefault();
  const cep = `https://viacep.com.br/ws/${inputCep.value}/json/`;
  buscarCep(cep);
  setTimeout(mostrarCEP, 10);
}
function buscarCep(cep) {
  fetch(cep)
    .then((r) => r.json())
    .then((body) => (cepJson = body));
}

function mostrarCEP() {
  itens.forEach((item) => {
    item.children[--item.children.length].innerHTML =
      cepJson[item.children[0].innerHTML.toLowerCase()];
  });
}
