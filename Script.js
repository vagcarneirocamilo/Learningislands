function startLesson(topic) {
  const lessonArea = document.getElementById("lesson-area");
  lessonArea.classList.remove("hidden");

  if (topic === "greetings") {
    lessonArea.innerHTML = `
      <h3>👋 Saudações</h3>
      <p>Como se diz "Olá" em inglês?</p>
      <button onclick="checkAnswer('Hello', 'Hello')">Hello</button>
      <button onclick="checkAnswer('Hello', 'Bye')">Bye</button>
      <div id="result"></div>
    `;
  }

  if (topic === "numbers") {
    lessonArea.innerHTML = `
      <h3>🔢 Números</h3>
      <p>Como se diz "Dois" em inglês?</p>
      <button onclick="checkAnswer('Two', 'Two')">Two</button>
      <button onclick="checkAnswer('Two', 'Ten')">Ten</button>
      <div id="result"></div>
    `;
  }

  window.scrollTo({ top: lessonArea.offsetTop, behavior: 'smooth' });
}

function checkAnswer(correct, chosen) {
  const result = document.getElementById("result");
  if (correct === chosen) {
    result.textContent = "✅ Acertou! +10 XP";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Tente novamente!";
    result.style.color = "red";
  }
}
