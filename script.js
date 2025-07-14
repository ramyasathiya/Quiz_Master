const correctAnswers = ["4", "Paris", "Cascading style sheets"];
function calculateScore(callback) {
  const inputs = [
    document.getElementById("q1").value.trim(),
    document.getElementById("q2").value.trim(),
    document.getElementById("q3").value.trim()
  ];

  const score = callback(inputs, correctAnswers);

  document.getElementById("output").textContent =
    `Your Score: ${score} / ${correctAnswers.length}`;
}
function strictScoring(userAnswers, correctAnswers) {
  let score = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      score++;
    }
  }
  return score;
}
