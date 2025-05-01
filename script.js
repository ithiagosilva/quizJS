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
  {
    id: 7,
    nome: "Qual país é conhecido como 'terra do sol nascente'?",
    opcoes: [
      {
        opcao1: "China",
        opcao2: "Japão",
        opcao3: "Coreia do Sul",
        opcao4: "Tailândia",
        opCorreta: "Japão",
      },
    ],
  },
  {
    id: 8,
    nome: "Qual é o metal líquido à temperatura ambiente?",
    opcoes: [
      {
        opcao1: "Ouro",
        opcao2: "Mercúrio",
        opcao3: "Prata",
        opcao4: "Alumínio",
        opCorreta: "Mercúrio",
      },
    ],
  },
  {
    id: 9,
    nome: "Quem foi o primeiro presidente do Brasil?",
    opcoes: [
      {
        opcao1: "Getúlio Vargas",
        opcao2: "Juscelino Kubitschek",
        opcao3: "Deodoro da Fonseca",
        opcao4: "Dom Pedro II",
        opCorreta: "Deodoro da Fonseca",
      },
    ],
  },
  {
    id: 10,
    nome: "Quantos ossos tem o corpo humano adulto?",
    opcoes: [
      {
        opcao1: "206",
        opcao2: "195",
        opcao3: "250",
        opcao4: "180",
        opCorreta: "206",
      },
    ],
  },
  {
    id: 11,
    nome: "Qual é o rio mais longo do mundo?",
    opcoes: [
      {
        opcao1: "Rio Amazonas",
        opcao2: "Rio Nilo",
        opcao3: "Rio Mississipi",
        opcao4: "Rio Yangtzé",
        opCorreta: "Rio Nilo",
      },
    ],
  },
  {
    id: 12,
    nome: "Quem escreveu 'Dom Quixote'?",
    opcoes: [
      {
        opcao1: "William Shakespeare",
        opcao2: "Miguel de Cervantes",
        opcao3: "Jorge Luis Borges",
        opcao4: "Fernando Pessoa",
        opCorreta: "Miguel de Cervantes",
      },
    ],
  },
  {
    id: 13,
    nome: "Quantos planetas existem no sistema solar?",
    opcoes: [
      {
        opcao1: "7",
        opcao2: "8",
        opcao3: "9",
        opcao4: "10",
        opCorreta: "8",
      },
    ],
  },
  {
    id: 14,
    nome: "Qual país sediou a Copa do Mundo de 2014?",
    opcoes: [
      {
        opcao1: "Alemanha",
        opcao2: "Brasil",
        opcao3: "Argentina",
        opcao4: "França",
        opCorreta: "Brasil",
      },
    ],
  },
  {
    id: 15,
    nome: "Qual cientista formulou a teoria da relatividade?",
    opcoes: [
      {
        opcao1: "Isaac Newton",
        opcao2: "Albert Einstein",
        opcao3: "Nikola Tesla",
        opcao4: "Galileu Galilei",
        opCorreta: "Albert Einstein",
      },
    ],
  },
  {
    id: 16,
    nome: "Qual é o animal terrestre mais rápido?",
    opcoes: [
      {
        opcao1: "Leão",
        opcao2: "Antílope",
        opcao3: "Guepardo",
        opcao4: "Cavalo",
        opCorreta: "Guepardo",
      },
    ],
  },
  {
    id: 17,
    nome: "Qual é a capital do Canadá?",
    opcoes: [
      {
        opcao1: "Toronto",
        opcao2: "Vancouver",
        opcao3: "Ottawa",
        opcao4: "Montreal",
        opCorreta: "Ottawa",
      },
    ],
  },
  {
    id: 18,
    nome: "Quem é o autor de 'Harry Potter'?",
    opcoes: [
      {
        opcao1: "J.R.R. Tolkien",
        opcao2: "J.K. Rowling",
        opcao3: "Stephen King",
        opcao4: "George R.R. Martin",
        opCorreta: "J.K. Rowling",
      },
    ],
  },
  {
    id: 19,
    nome: "Qual é o oceano que banha a costa leste dos Estados Unidos?",
    opcoes: [
      {
        opcao1: "Oceano Pacífico",
        opcao2: "Oceano Índico",
        opcao3: "Oceano Atlântico",
        opcao4: "Oceano Ártico",
        opCorreta: "Oceano Atlântico",
      },
    ],
  },
  {
    id: 20,
    nome: "Em que ano o homem pisou na Lua pela primeira vez?",
    opcoes: [
      {
        opcao1: "1965",
        opcao2: "1969",
        opcao3: "1972",
        opcao4: "1958",
        opCorreta: "1969",
      },
    ],
  },
  {
    id: 21,
    nome: "Qual é a moeda oficial do Reino Unido?",
    opcoes: [
      {
        opcao1: "Euro",
        opcao2: "Libra esterlina",
        opcao3: "Dólar",
        opcao4: "Franco suíço",
        opCorreta: "Libra esterlina",
      },
    ],
  },
  {
    id: 22,
    nome: "Qual famoso físico desenvolveu as leis do movimento?",
    opcoes: [
      {
        opcao1: "Isaac Newton",
        opcao2: "Albert Einstein",
        opcao3: "Stephen Hawking",
        opcao4: "Galileu Galilei",
        opCorreta: "Isaac Newton",
      },
    ],
  },
  {
    id: 23,
    nome: "Qual é o nome do processo pelo qual as plantas produzem seu próprio alimento?",
    opcoes: [
      {
        opcao1: "Fermentação",
        opcao2: "Fotossíntese",
        opcao3: "Respiração celular",
        opcao4: "Digestão",
        opCorreta: "Fotossíntese",
      },
    ],
  },
  {
    id: 24,
    nome: "Quem foi o primeiro homem a viajar pelo espaço?",
    opcoes: [
      {
        opcao1: "Neil Armstrong",
        opcao2: "Yuri Gagarin",
        opcao3: "Buzz Aldrin",
        opcao4: "John Glenn",
        opCorreta: "Yuri Gagarin",
      },
    ],
  },
  {
    id: 25,
    nome: "Qual país tem a Torre Eiffel como um dos seus pontos turísticos mais famosos?",
    opcoes: [
      {
        opcao1: "Itália",
        opcao2: "França",
        opcao3: "Espanha",
        opcao4: "Alemanha",
        opCorreta: "França",
      },
    ],
  },
  {
    id: 26,
    nome: "Qual elemento químico é essencial para a respiração dos seres humanos?",
    opcoes: [
      {
        opcao1: "Carbono",
        opcao2: "Hidrogênio",
        opcao3: "Oxigênio",
        opcao4: "Nitrogênio",
        opCorreta: "Oxigênio",
      },
    ],
  },
  {
    id: 27,
    nome: "Qual é o continente onde se encontra o deserto do Saara?",
    opcoes: [
      {
        opcao1: "Ásia",
        opcao2: "África",
        opcao3: "América do Sul",
        opcao4: "Austrália",
        opCorreta: "África",
      },
    ],
  },
  {
    id: 28,
    nome: "Em que ano ocorreu a independência do Brasil?",
    opcoes: [
      {
        opcao1: "1808",
        opcao2: "1822",
        opcao3: "1889",
        opcao4: "1750",
        opCorreta: "1822",
      },
    ],
  },
  {
    id: 29,
    nome: "Qual é o nome do famoso monumento localizado em Nova York que simboliza a liberdade?",
    opcoes: [
      {
        opcao1: "Estátua da Liberdade",
        opcao2: "Torre Eiffel",
        opcao3: "Cristo Redentor",
        opcao4: "Big Ben",
        opCorreta: "Estátua da Liberdade",
      },
    ],
  },
  {
    id: 30,
    nome: "Quantos estados existem no Brasil?",
    opcoes: [
      {
        opcao1: "24",
        opcao2: "26",
        opcao3: "27",
        opcao4: "30",
        opCorreta: "27",
      },
    ],
  },
  {
    id: 31,
    nome: "Quantos planetas existem no sistema solar?",
    opcoes: [
      {
        opcao1: "7",
        opcao2: "8",
        opcao3: "9",
        opcao4: "10",
        opCorreta: "8",
      },
    ],
  },
  {
    id: 32,
    nome: "Quem escreveu 'Dom Quixote'?",
    opcoes: [
      {
        opcao1: "William Shakespeare",
        opcao2: "Miguel de Cervantes",
        opcao3: "Jorge Luis Borges",
        opcao4: "Fernando Pessoa",
        opCorreta: "Miguel de Cervantes",
      },
    ],
  },
  {
    id: 33,
    nome: "Qual é a moeda oficial do Japão?",
    opcoes: [
      {
        opcao1: "Euro",
        opcao2: "Iene",
        opcao3: "Dólar",
        opcao4: "Libra esterlina",
        opCorreta: "Iene",
      },
    ],
  },
  {
    id: 34,
    nome: "Qual é o nome do processo pelo qual a água se transforma em vapor?",
    opcoes: [
      {
        opcao1: "Condensação",
        opcao2: "Evaporação",
        opcao3: "Precipitação",
        opcao4: "Fusão",
        opCorreta: "Evaporação",
      },
    ],
  },
  {
    id: 35,
    nome: "Qual cientista formulou a teoria da relatividade?",
    opcoes: [
      {
        opcao1: "Isaac Newton",
        opcao2: "Albert Einstein",
        opcao3: "Nikola Tesla",
        opcao4: "Galileu Galilei",
        opCorreta: "Albert Einstein",
      },
    ],
  },
  {
    id: 36,
    nome: "Qual país tem a Torre Eiffel como um dos seus pontos turísticos?",
    opcoes: [
      {
        opcao1: "Itália",
        opcao2: "França",
        opcao3: "Espanha",
        opcao4: "Alemanha",
        opCorreta: "França",
      },
    ],
  },
  {
    id: 37,
    nome: "Qual é o animal terrestre mais rápido?",
    opcoes: [
      {
        opcao1: "Leão",
        opcao2: "Antílope",
        opcao3: "Guepardo",
        opcao4: "Cavalo",
        opCorreta: "Guepardo",
      },
    ],
  },
  {
    id: 38,
    nome: "Quantos lados tem um pentágono?",
    opcoes: [
      {
        opcao1: "4",
        opcao2: "5",
        opcao3: "6",
        opcao4: "7",
        opCorreta: "5",
      },
    ],
  },
  {
    id: 39,
    nome: "Qual é o elemento químico representado pelo símbolo 'Na'?",
    opcoes: [
      {
        opcao1: "Neônio",
        opcao2: "Nióbio",
        opcao3: "Sódio",
        opcao4: "Níquel",
        opCorreta: "Sódio",
      },
    ],
  },
  {
    id: 40,
    nome: "Qual país sediou a Copa do Mundo de 2018?",
    opcoes: [
      {
        opcao1: "Brasil",
        opcao2: "Alemanha",
        opcao3: "Rússia",
        opcao4: "França",
        opCorreta: "Rússia",
      },
    ],
  },
  {
    id: 41,
    nome: "Qual é a capital da Argentina?",
    opcoes: [
      {
        opcao1: "Buenos Aires",
        opcao2: "Mendoza",
        opcao3: "Rosário",
        opcao4: "Córdoba",
        opCorreta: "Buenos Aires",
      },
    ],
  },
  {
    id: 42,
    nome: "Quem foi o autor de '1984'?",
    opcoes: [
      {
        opcao1: "Aldous Huxley",
        opcao2: "George Orwell",
        opcao3: "Ray Bradbury",
        opcao4: "Philip K. Dick",
        opCorreta: "George Orwell",
      },
    ],
  },
  {
    id: 43,
    nome: "Qual é o metal líquido à temperatura ambiente?",
    opcoes: [
      {
        opcao1: "Mercúrio",
        opcao2: "Ferro",
        opcao3: "Alumínio",
        opcao4: "Chumbo",
        opCorreta: "Mercúrio",
      },
    ],
  },
  {
    id: 44,
    nome: "Quantos elementos químicos existem atualmente na tabela periódica?",
    opcoes: [
      {
        opcao1: "108",
        opcao2: "112",
        opcao3: "118",
        opcao4: "126",
        opCorreta: "118",
      },
    ],
  },
  {
    id: 45,
    nome: "Em que ano caiu o Muro de Berlim?",
    opcoes: [
      {
        opcao1: "1987",
        opcao2: "1989",
        opcao3: "1991",
        opcao4: "1993",
        opCorreta: "1989",
      },
    ],
  },
  {
    id: 46,
    nome: "Qual é o animal símbolo da Austrália?",
    opcoes: [
      {
        opcao1: "Coala",
        opcao2: "Canguru",
        opcao3: "Diabo-da-Tasmânia",
        opcao4: "Emu",
        opCorreta: "Canguru",
      },
    ],
  },
  {
    id: 47,
    nome: "Quantos jogadores compõem um time de futebol em campo?",
    opcoes: [
      {
        opcao1: "9",
        opcao2: "10",
        opcao3: "11",
        opcao4: "12",
        opCorreta: "11",
      },
    ],
  },
  {
    id: 48,
    nome: "Qual é a montanha mais alta do mundo?",
    opcoes: [
      {
        opcao1: "Monte Everest",
        opcao2: "Monte Kilimanjaro",
        opcao3: "Monte Aconcágua",
        opcao4: "Monte McKinley",
        opCorreta: "Monte Everest",
      },
    ],
  },
  {
    id: 49,
    nome: "Quem foi o primeiro imperador do Brasil?",
    opcoes: [
      {
        opcao1: "Dom Pedro I",
        opcao2: "Dom Pedro II",
        opcao3: "Getúlio Vargas",
        opcao4: "Juscelino Kubitschek",
        opCorreta: "Dom Pedro I",
      },
    ],
  },
  {
    id: 50,
    nome: "Qual é o maior país do mundo em extensão territorial?",
    opcoes: [
      {
        opcao1: "Estados Unidos",
        opcao2: "Canadá",
        opcao3: "China",
        opcao4: "Rússia",
        opCorreta: "Rússia",
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
let acertosText = document.querySelector("#acertos");

let placar = 0;
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
    resposta.style.color = "#fff";
    resposta.style.fontWeight = "bold";
    placar += 1;
    acertosText.innerText = "Acertos: " + placar;
  } else if (
    valueOp2.checked &&
    valueOp2.value === pergunta.opcoes[0].opCorreta
  ) {
    resposta.innerText = "Resposta Correta";
    resposta.style.color = "#fff";
    resposta.style.fontWeight = "bold";
    placar += 1;
    acertosText.innerText = "Acertos: " + placar;
  } else if (
    valueOp3.checked &&
    valueOp3.value === pergunta.opcoes[0].opCorreta
  ) {
    resposta.innerText = "Resposta Correta";
    resposta.style.color = "#fff";
    resposta.style.fontWeight = "bold";
    placar += 1;
    acertosText.innerText = "Acertos: " + placar;
  } else if (
    valueOp4.checked &&
    valueOp4.value === pergunta.opcoes[0].opCorreta
  ) {
    resposta.innerText = "Resposta Correta";
    resposta.style.color = "#fff";
    resposta.style.fontWeight = "bold";
    placar += 1;
    acertosText.innerText = "Acertos: " + placar;
  } else {
    resposta.innerText = "Resposta Incorreta";
    resposta.style.color = "red";
    resposta.style.fontWeight = "bold";
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
  if (resposta.innerText != "Selecione uma opção") {
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
