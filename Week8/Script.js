            let hours = 0;
            let minutes = 0;
            let seconds = 0;
            let milliseconds = 0;
            let timer = null;
            let running = false;

            const display = document.getElementById("display");
            const startStopBtn = document.getElementById("startStop");
            const resetBtn = document.getElementById("reset");
            const lapBtn = document.getElementById("lap");
            const lapsList = document.getElementById("laps");

            function updateDisplay() {
            const h = String(hours).padStart(2, "0");
            const m = String(minutes).padStart(2, "0");
            const s = String(seconds).padStart(2, "0");
            const ms = String(milliseconds).padStart(3, "0");
            display.textContent = `${h}:${m}:${s}.${ms}`;
            }

            function tick() {
            milliseconds += 10; 
            if (milliseconds >= 1000) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
            }

            startStopBtn.addEventListener("click", () => {
            if (!running) {
                timer = setInterval(tick, 10); 
                startStopBtn.textContent = "Stop";
                running = true;
            } else {
                clearInterval(timer);
                startStopBtn.textContent = "Start";
                running = false;
            }
            });

            resetBtn.addEventListener("click", () => {
            clearInterval(timer);
            hours = 0;
            minutes = 0;
            seconds = 0;
            milliseconds = 0;
            running = false;
            updateDisplay();
            startStopBtn.textContent = "Start";
            lapsList.innerHTML = ""; 
            });

            lapBtn.addEventListener("click", () => {
            if (running) {
                const lapTime = display.textContent;
                const li = document.createElement("li");
                li.textContent = lapTime;
                lapsList.appendChild(li);
            }
            });

            updateDisplay();
