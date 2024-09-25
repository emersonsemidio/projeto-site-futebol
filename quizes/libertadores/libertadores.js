const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector("button");
const feedbackMessage = document.createElement("p");
 // Elemento para exibir o feedback

import questions from "./quiz-libertadores.js";

let currentIndex = 0;
let questionsCorrect = 0;

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  feedbackMessage.innerHTML = ""; // Limpa a mensagem de feedback
  loadQuestion();
};

function nextQuestion(e) {
  const correct = e.target.getAttribute("data-correct") === "true";

  if (correct) {
    questionsCorrect++;
    feedbackMessage.innerHTML = "A RESPOSTA ESTÁ CORRETA!"; // Mensagem de feedback
    feedbackMessage.style.fontWeight = "bold"; // Deixa a mensagem em negrito
    feedbackMessage.style.color = "green";  // Cor verde para correto
    feedbackMessage.style.fontSize = "1.5rem"; // Tamanho da fonte
    feedbackMessage.style.fontFamily = "Arial"; // Fonte Arial
    feedbackMessage.style.textAlign = "center"; // Centraliza o texto
  } else {
    feedbackMessage.innerHTML = "A RESPOSTA ESTÁ INCORRETA!";  // Mensagem de feedback
    feedbackMessage.style.fontWeight = "bold"; // Deixa a mensagem em negrito
    feedbackMessage.style.color = "red";    // Cor vermelha para errado
    feedbackMessage.style.fontSize = "1.5rem"; // Tamanho da fonte
    feedbackMessage.style.fontFamily = "Arial"; // Fonte Arial
    feedbackMessage.style.textAlign = "center"; // Centraliza o texto
  }

  document.querySelectorAll("[data-correct='true']").forEach((item) => {
    item.style.backgroundColor = "green";  // Cor verde para a resposta correta
  });

  answers.appendChild(feedbackMessage); // Exibe o feedback abaixo das respostas

  // Aguarda 1 segundo antes de passar para a próxima pergunta
  setTimeout(() => {
    if (currentIndex < questions.length - 1) {
       currentIndex++;
       feedbackMessage.innerHTML = ""; // Limpa a mensagem de feedback para a próxima pergunta
       loadQuestion();
    } else {
      finish();
    }
  }, 4000); // 4 segundo de atraso
}

function finish() {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
      </button>
    `;

    answers.appendChild(div);
  });

  document.querySelectorAll(".answer").forEach((item) => {
    item.addEventListener("click", nextQuestion);
  });
}

loadQuestion();
