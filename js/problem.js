console.log("PROBLEM MODULE LOADED");

let difficulty = Number(localStorage.getItem("lastDifficulty")) || 10;

export function adjustDifficulty(responseTime) {
    if (responseTime < 3000) difficulty = Math.min(difficulty + 1, 50);
    else if (responseTime > 10000) difficulty = Math.max(difficulty - 1, 5);

    localStorage.setItem("lastDifficulty", difficulty);
}

export function increaseDifficultyAfterSession() {
    difficulty = Math.min(difficulty + 5, 50);
    localStorage.setItem("lastDifficulty", difficulty);
}

export function getDifficulty() {
    return difficulty;
}

export function generateProblem(operator = "+") {
    const a = Math.floor(Math.random() * difficulty) + 1;
    const b = Math.floor(Math.random() * difficulty) + 1;

    let question = "";
    let answer = 0;

    switch (operator) {
        case "+":
            question = `${a} + ${b}`;
            answer = a + b;
            break;
        case "-":
            const big = Math.max(a, b);
            const small = Math.min(a, b);
            question = `${big} - ${small}`;
            answer = big - small;
            break;
        case "*":
            question = `${a} * ${b}`;
            answer = a * b;
            break;
        case "/":
            const numerator = a * b; // ensures integer division
            question = `${numerator} ÷ ${b}`;
            answer = numerator / b;
            break;
        default:
            question = `${a} + ${b}`;
            answer = a + b;
    }

    return { question, answer };
}