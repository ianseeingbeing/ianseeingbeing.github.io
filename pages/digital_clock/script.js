const clock = document.getElementById("clock");
const date = new Date();

function setClock() {
    const date = new Date();
    let hours = date.getHours().toString().padStart(2, 0);
    const meridiem = hours < 12 ? "AM" : "PM";
    hours =
        hours > 12
            ? (hours - 12).toString().padStart(2, 0)
            : hours.toString().padStart(2, 0);
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);

    let time = `${hours}:${minutes}:${seconds} ${meridiem}`;

    clock.textContent = time;

    console.log("updated clock");
}

setClock();
setInterval(setClock, 1000);
