const counter = document.getElementById("counter");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const userInput = document.getElementById("input");
let interval;
startBtn.addEventListener("click", () => {
    counter.innerHTML = Number(userInput.value)
    interval = setInterval(function() {
        counter.innerHTML -= 1 
        if (counter.innerHTML == 0) {
            clearInterval(interval);
            counter.innerHTML = "Stop"
        }
    }, 1000)
    
});
stopBtn.addEventListener("click", () => {
    counter.innerHTML = "Stopped"
    clearInterval(interval);
})

