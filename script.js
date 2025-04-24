const listaQuestoes = [
  {
    id: 1,
    nome: "A música Sweet Child O' Mine pertence a qual banda?",
    opcoes: [
      {
        opcao1: "Guns N' Roses",
        opcao2: "AC-DC",
        opcao3: "Queen",
        opcao4: "Ratt",
        opCorreta: "Guns N' Roses",
      },
    ],
  },
  {
    id: 2,
    nome: "Qual componente do computador é responsável por armazenar dados temporariamente?",
    opcoes: [
      {
        opcao1: "Memória Ram",
        opcao2: "HD",
        opcao3: "SSD",
        opcao4: "Mouse",
        opCorreta: "Memória Ram",
      },
    ],
  },
  {
    id: 3,
    nome: "Qual é o maior planeta do sistema solar?",
    opcoes: [
      {
        opcao1: "Terra",
        opcao2: "Marte",
        opcao3: "Júpiter",
        opcao4: "Saturno",
        opCorreta: "Júpiter",
      },
    ],
  },
  {
    id: 4,
    nome: "Quem pintou a Mona Lisa?",
    opcoes: [
      {
        opcao1: "Vincent van Gogh",
        opcao2: "Leonardo da Vinci",
        opcao3: "Pablo Picasso",
        opcao4: "Claude Monet",
        opCorreta: "Leonardo da Vinci",
      },
    ],
  },
  {
    id: 5,
    nome: "Qual é o elemento químico representado pelo símbolo 'O'?",
    opcoes: [
      {
        opcao1: "Oxigênio",
        opcao2: "Ouro",
        opcao3: "Osmium",
        opcao4: "Óxido",
        opCorreta: "Oxigênio",
      },
    ],
  },
  {
    id: 6,
    nome: "Quantos lados tem um hexágono?",
    opcoes: [
      {
        opcao1: "4",
        opcao2: "5",
        opcao3: "6",
        opcao4: "8",
        opCorreta: "6",
      },
    ],
  },
];

let nomePergunta = document.querySelector("#nome-pergunta");
let displayOp1 = document.querySelector("#label-op1");
let valueOp1 = document.querySelector("#op1");
let displayOp2 = document.querySelector("#label-op2");
let valueOp2 = document.querySelector("#op2");
let displayOp3 = document.querySelector("#label-op3");
let valueOp3 = document.querySelector("#op3");
let displayOp4 = document.querySelector("#label-op4");
let valueOp4 = document.querySelector("#op4");
let btnEnviar = document.querySelector("#btn-enviar");
let btnProxima = document.querySelector("#btn-proxima");
let resposta = document.querySelector("#resposta");
let comecar = document.querySelector("#start");
let tela1 = document.querySelector("#tela1");

let pergunta = [];

function randomQuestion() {
  pergunta = listaQuestoes[Math.floor(Math.random() * listaQuestoes.length)];
  nomePergunta.innerText = pergunta.nome;
  displayOp1.innerText = pergunta.opcoes[0].opcao1;
  valueOp1.value = pergunta.opcoes[0].opcao1;

  displayOp2.innerText = pergunta.opcoes[0].opcao2;
  valueOp2.value = pergunta.opcoes[0].opcao2;

  displayOp3.innerText = pergunta.opcoes[0].opcao3;
  valueOp3.value = pergunta.opcoes[0].opcao3;

  displayOp4.innerText = pergunta.opcoes[0].opcao4;
  valueOp4.value = pergunta.opcoes[0].opcao4;
}

function checkCorrect() {
  if (
    !valueOp1.checked &&
    !valueOp2.checked &&
    !valueOp3.checked &&
    !valueOp4.checked
  ) {
    resposta.innerText = "Selecione uma opção";
  } else if (
    valueOp1.checked &&
    valueOp1.value === pergunta.opcoes[0].opCorreta
  ) {
    resposta.innerText = "Resposta Correta";
  } else if (
    valueOp2.checked &&
    valueOp2.value === pergunta.opcoes[0].opCorreta
  ) {
    resposta.innerText = "Resposta Correta";
  } else if (
    valueOp3.checked &&
    valueOp3.value === pergunta.opcoes[0].opCorreta
  ) {
    resposta.innerText = "Resposta Correta";
  } else if (
    valueOp4.checked &&
    valueOp4.value === pergunta.opcoes[0].opCorreta
  ) {
    resposta.innerText = "Resposta Correta";
  } else {
    resposta.innerText = "Resposta Incorreta";
  }
}

function markedQuestion() {
  if (valueOp1.checked) {
    displayOp1.classList.add("question-checked");
    displayOp2.classList.remove("question-checked");
    displayOp3.classList.remove("question-checked");
    displayOp4.classList.remove("question-checked");
  } else if (valueOp2.checked) {
    displayOp2.classList.add("question-checked");
    displayOp1.classList.remove("question-checked");
    displayOp3.classList.remove("question-checked");
    displayOp4.classList.remove("question-checked");
  } else if (valueOp3.checked) {
    displayOp3.classList.add("question-checked");
    displayOp1.classList.remove("question-checked");
    displayOp2.classList.remove("question-checked");
    displayOp4.classList.remove("question-checked");
  } else if (valueOp4.checked) {
    displayOp4.classList.add("question-checked");
    displayOp1.classList.remove("question-checked");
    displayOp2.classList.remove("question-checked");
    displayOp3.classList.remove("question-checked");
  }
}
document.querySelector("body").addEventListener("click", () => {
  markedQuestion();
});

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  checkCorrect();
  if (resposta.innerText === "Resposta Correta") {
    btnProxima.style.display = "flex";
  }
});
btnProxima.addEventListener("click", (e) => {
  e.preventDefault();
  randomQuestion();
  resposta.innerText = "";
  btnProxima.style.display = "none";
});
comecar.addEventListener("click", () => {
  document.querySelector(".container-app").style.display = "flex";
  tela1.style.display = "none";
  randomQuestion();
});
