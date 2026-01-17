console.log("UI MODULE LOADED");

export function updateProblemDOM(problem, problemCount, maxProblems, difficulty) {
    document.getElementById("problem").textContent = problem.question;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";
    document.getElementById("answer").focus();

    document.getElementById("progress").textContent = 
        `Problem ${problemCount + 1} of ${maxProblems}`;
    document.getElementById("difficulty").textContent = 
        `Difficulty max: ${difficulty}`;
}

export function showVictory() {
    document.getElementById("problem").textContent = "🎉 Victory! You completed the session!";
    document.getElementById("feedback").textContent = "";
}