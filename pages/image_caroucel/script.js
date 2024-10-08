const images = document.querySelectorAll(".caroucelImg");

const caroucelLeftControl = document.getElementById("caroucelLeftControl");
const caroucelRightControl = document.getElementById("caroucelRightControl");
const currImgTxt = document.getElementById("currentImageText");

let index = 0;

caroucelLeftControl.addEventListener("click", () => {
    let current = images[index];
    index--;
    if (index < 0) {
        index = images.length - 1;
    }
    let next = images[index];

    current.hidden = true;
    next.hidden = false;

    updateText(index);
});

caroucelRightControl.addEventListener("click", () => {
    let current = images[index];
    index++;
    if (index == images.length) {
        index = 0;
    }
    let next = images[index];

    current.hidden = true;
    next.hidden = false;

    updateText(index);
});

function updateText(index) {
    let books = ["Unsouled", "Soulsmith", "Blackflame"];
    currImgTxt.textContent = `${books[index]} - Cradle: Volume ${index + 1}`;
}
