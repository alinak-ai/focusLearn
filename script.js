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

let problemCount = 0;            
const maxProblems = 5;           
let currentProblem = generateProblem();

// Show a problem on the page
function showProblem() {
  document.getElementById("problem").textContent = currentProblem.question;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").style.display = "inline"; // make sure input is visible
  document.getElementById("answer").focus(); 
}

// Show the first problem
showProblem();

// Enter key listener
document.getElementById("answer").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const userAnswer = Number(document.getElementById("answer").value);

    if (userAnswer === currentProblem.answer) {
      document.getElementById("feedback").textContent = "Correct!";
      problemCount++;

      if (problemCount >= maxProblems) {
        // Victory message
        document.getElementById("problem").textContent = "🎉 Victory! You completed the session!";
        document.getElementById("feedback").textContent = "";

        // Restart session after 1.5 seconds
        setTimeout(() => {
          problemCount = 0; // reset counter
          currentProblem = generateProblem();
          showProblem();
        }, 1500);

      } else {
        // Next problem after 0.5s
        setTimeout(() => {
          currentProblem = generateProblem();
          showProblem();
        }, 500);
      }

    } else {
      document.getElementById("feedback").textContent = "Try again";
      document.getElementById("answer").focus(); 
    }
  }
});