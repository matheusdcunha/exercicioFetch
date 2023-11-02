const bitcoinAPI = "https://blockchain.info/ticker";
const textoBitcoin = document.querySelector(".cotacao");

function requisitandoAPI() {
  fetch(bitcoinAPI)
    .then((r) => r.json())
    .then((body) => {
      textoBitcoin.innerText = body.BRL.buy + " reais";
    });
}
requisitandoAPI();
setInterval(requisitandoAPI, 3000);
