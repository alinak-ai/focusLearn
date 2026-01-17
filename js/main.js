console.log("MAIN LOADED");

import { generateProblem, adjustDifficulty, increaseDifficultyAfterSession, getDifficulty } from './problem.js';
import { addProblemToSession, completeSession } from './session.js';
import { updateProblemDOM, showVictory } from './ui.js';

const maxProblems = 5;
let problemCount = 0;
let selectedOperator = "+"; // button-selected operator
let currentOperator = "+"; // used after victory
let currentProblem = generateProblem(currentOperator);
let problemStartTime = Date.now();

function showProblem() {
    updateProblemDOM(currentProblem, problemCount, maxProblems, getDifficulty());
    problemStartTime = Date.now();
}

showProblem();

// Operator buttons
document.querySelectorAll("#operator-buttons button").forEach(button => {
    button.addEventListener("click", () => {
        selectedOperator = button.getAttribute("data-op");
        currentOperator = selectedOperator;
        // Highlight selected button
        document.querySelectorAll("#operator-buttons button").forEach(b => b.classList.remove("selected"));
        button.classList.add("selected");
        // Generate new problem immediately
        currentProblem = generateProblem(selectedOperator);
        showProblem();
    });
});

// Enter key listener
document.getElementById("answer").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const responseTime = Date.now() - problemStartTime;
        const userAnswer = Number(document.getElementById("answer").value);

        if (userAnswer === currentProblem.answer) {
            adjustDifficulty(responseTime);
            addProblemToSession({
                question: currentProblem.question,
                correctAnswer: currentProblem.answer,
                userAnswer,
                timestamp: Date.now()
            });

            problemCount++;

            if (problemCount >= maxProblems) {
                showVictory();
                increaseDifficultyAfterSession();
                completeSession();

                setTimeout(() => {
                    problemCount = 0;
                    currentProblem = generateProblem(currentOperator);
                    showProblem();
                }, 2000);
            } else {
                setTimeout(() => {
                    currentProblem = generateProblem(currentOperator);
                    showProblem();
                }, 500);
            }
        } else {
            document.getElementById("feedback").textContent = "Try again";
            document.getElementById("answer").focus();
        }
    }
});