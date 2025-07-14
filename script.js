const correctAnswers = ["4", "Paris", "HyperText Markup Language"];

function calculateScore(callback) {
  const inputs = document.querySelectorAll("input");
  const userAnswers = Array.from(inputs).map(input => input.value);
  const score = callback(userAnswers, correctAnswers);
  document.getElementById("output").textContent = `Your Score: ${score} / ${correctAnswers.length}`;
}

function strictScoring(user, correct) {
  return user.filter((ans, i) => ans.trim() === correct[i]).length;
}

function lenientScoring(user, correct) {
  return user.filter((ans, i) =>
    ans.toLowerCase().includes(correct[i].toLowerCase().split(" ")[0])
  ).length;
}

document.getElementById("strict").addEventListener("click", () => {
  calculateScore(strictScoring);
});

document.getElementById("lenient").addEventListener("click", () => {
  calculateScore(lenientScoring);
});
