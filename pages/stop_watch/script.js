const clock = document.getElementById("clock");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function createStopwatch() {
    let milliseconds = 0;
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    let startTime = 0;
    let currentTime = 0;
    let elapsedTime = 0;

    let clockId = 0;

    let running = false;

    function formatClock() {
        let ms = milliseconds.toString().padStart(2, 0);
        let sec = seconds.toString().padStart(2, 0);
        let min = minutes.toString().padStart(2, 0);
        let hr = hours.toString().padStart(2, 0);

        let time = `${hr}:${min}:${sec}:${ms}`;

        clock.textContent = time;
    }

    function start() {
        if (!running) {
            running = true;
            // updates startTime everytime start button pressed and
            // accouts for time passed when not running.
            startTime = new Date().getTime() - elapsedTime;

            clockId = setInterval(() => {
                currentTime = new Date().getTime();
                elapsedTime = currentTime - startTime;

                milliseconds = Math.floor(elapsedTime % 100);
                seconds = Math.floor((elapsedTime / 1000) % 60);
                minutes = Math.floor((elapsedTime / (60 * 1000)) % 60);
                hours = Math.floor((elapsedTime / (60 * 60 * 1000)) % 60);

                formatClock();
            }, 5);
            console.log("start stopwatch");
        }
    }

    function stop() {
        if (running) {
            running = false;
            clearInterval(clockId);
            console.log("stop stopwatch");
        }
    }

    function reset() {
        stop();

        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;

        startTime = 0;
        currentTime = 0;
        elapsedTime = 0;

        formatClock();

        console.log("reset stopwatch");
    }

    return {
        start,
        stop,
        reset,
    };
}

const stopwatch = createStopwatch();

startBtn.addEventListener("click", stopwatch.start);
stopBtn.addEventListener("click", stopwatch.stop);
resetBtn.addEventListener("click", stopwatch.reset);
