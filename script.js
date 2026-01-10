console.log("SCRIPT LOADED");

function generateProblem() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
  
    return {
      question: `${a} + ${b}`,
      answer: a + b
    };
  }




//const problem = generateProblem();
//console.log(problem.question);
//console.log(problem.answer);

let currentProblem = generateProblem();

// Show the problem on the page
document.getElementById("problem").textContent = currentProblem.question;

// Listen for button click
document.getElementById("submit").addEventListener("click", function () {
  const userAnswer = Number(document.getElementById("answer").value);

  if (userAnswer === currentProblem.answer) {
    document.getElementById("feedback").textContent = "Correct!";
  } else {
    document.getElementById("feedback").textContent = "Try again";
  }
});