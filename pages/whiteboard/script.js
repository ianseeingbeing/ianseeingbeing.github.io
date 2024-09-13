const whiteboard = document.getElementById("whiteboard");
const ctx = whiteboard.getContext("2d");
const clearBtn = document.getElementById("clearBtn");

let isDrawing = false;
let tool = "pen";

whiteboard.addEventListener("mousedown", () => (isDrawing = true));
whiteboard.addEventListener("mouseup", () => (isDrawing = false));
whiteboard.addEventListener("mousemove", draw);

whiteboard.height = window.innerHeight;
whiteboard.width = window.innerWidth;

clearBtn.addEventListener("click", clearWhiteboard);

ctx.lineWidth = 25;
ctx.lineCap = "round";
ctx.antialias = true;
ctx.strokeStyle = "#000000";
ctx.fillStyle = "#000000";

function startDrawing(e) {
    isDrawing = true;

    //ctx.clearRect(0, 0, whiteboard.width, whiteboard.height);

    ctx.beginPath();

    console.log("isDrawing " + isDrawing);
}

function draw(e) {
    if (!isDrawing) return;

    let rect = whiteboard.getBoundingClientRect();

    const x = e.clientX;
    const y = e.clientY;

    ctx.lineTo(x, y);
    ctx.stroke();
}

function stopDrawing(e) {
    isDrawing = false;

    ctx.stroke();

    console.log("isDrawing " + isDrawing);
}

function clearWhiteboard() {
    ctx.clearRect(0, 0, whiteboard.width, whiteboard.height);
}
