console.log("SESSION MODULE LOADED");

let allSessions = JSON.parse(localStorage.getItem("allSessions")) || [];
let sessionData = [];

export function addProblemToSession(problemObj) {
    sessionData.push(problemObj);
}

export function completeSession() {
    const sessionId = allSessions.length + 1;
    allSessions.push({
        sessionId,
        problems: sessionData,
        date: Date.now()
    });
    localStorage.setItem("allSessions", JSON.stringify(allSessions));
    sessionData = [];
}
