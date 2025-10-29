// Palavras possíveis — o grupo pode alterar!
const palavras = ["tomjobim", "charliebrown", "ritalee", "timmaia", "caioocean","manobrown","legiaourbana"];
const palavra = palavras[Math.floor(Math.random() * palavras.length)];

let resposta = Array(palavra.length).fill("_");
let tentativas = 15;

const palavraEl = document.getElementById("palavra");
const tentativasEl = document.getElementById("tentativas");
const mensagemEl = document.getElementById("mensagem");
const letrasEl = document.getElementById("letras");

palavraEl.textContent = resposta.join("")

// Cria botões das letras
const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
alfabeto.forEach(letra => {
  const btn = document.createElement("button");
  btn.textContent = letra;
  btn.onclick = () => verificarLetra(letra, btn);
  letrasEl.appendChild(btn);
});

function verificarLetra(letra, btn) {
  btn.disabled = true;
  if (palavra.includes(letra)) {
    for (let i = 0; i < palavra.length; i++) {
      if (palavra[i] === letra) {
        resposta[i] = letra;
      }
    }
    palavraEl.textContent = resposta.join(" ");
  } else {
    tentativas--;
    tentativasEl.textContent = tentativas;
  }

  verificarFim();
}

function verificarFim() {
  if (!resposta.includes("_")) {
    mensagemEl.textContent = "🎉 Parabéns! Você acertou!";
    desativarBotoes();
  } else if (tentativas === 0) {
    mensagemEl.textContent = `💀 Fim de jogo! A palavra era "${palavra}".`;
    desativarBotoes();
  }
}

function desativarBotoes() {
  const botoes = document.querySelectorAll("#letras button");
  botoes.forEach(btn => btn.disabled = true);
}