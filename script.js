// Live Clock
function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, "0");
    let minutes = now.getMinutes().toString().padStart(2, "0");
    let seconds = now.getSeconds().toString().padStart(2, "0");
    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;

    highlightCurrentTask(hours);
}

setInterval(updateClock, 1000);
updateClock();

// Highlight Current Task
function highlightCurrentTask(hours) {
    let tasks = document.querySelectorAll('.task');
    tasks.forEach(task => task.style.opacity = "0.5");

    if (hours >= 4 && hours < 5) document.getElementById('sehri').style.opacity = "1";
    if (hours >= 5 && hours < 6.5) document.getElementById('math-science').style.opacity = "1";
    if (hours >= 7 && hours < 8) document.getElementById('english-bangla').style.opacity = "1";
    if (hours >= 8 && hours < 8.15) document.getElementById('workout').style.opacity = "1";
    if (hours >= 8.5 && hours < 10.5) document.getElementById('coding').style.opacity = "1";
    if (hours >= 10.5 && hours < 12) document.getElementById('islam-study').style.opacity = "1";
    if (hours >= 12 && hours < 12.5) document.getElementById('help-mom').style.opacity = "1";
    if (hours >= 13 && hours < 15) document.getElementById('project').style.opacity = "1";
    if (hours >= 15.5 && hours < 17) document.getElementById('skill-learning').style.opacity = "1";
    if (hours >= 17.5 && hours < 18.75) document.getElementById('iftar').style.opacity = "1";
    if (hours >= 22 && hours < 22.5) document.getElementById('quran').style.opacity = "1";
    if (hours >= 22.5 || hours < 4) document.getElementById('sleep').style.opacity = "1";
}

// Daily Motivation Quote
const quotes = ["Stay focused!", "Be productive!", "Success needs discipline!", "Every effort counts!", "Believe in yourself!"];
document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];