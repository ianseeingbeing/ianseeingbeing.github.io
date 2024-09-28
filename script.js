const welcomeText = document.getElementById("welcomeText");

let timePerChar = 200;
let msg1 = "Hi there!";
let msg2 = "Welcome to my site.";
let msgs = [msg1, msg2];

let firstMsgDelay = msg1.length * timePerChar * 3;

setTimeout(() => {
    welcomeText.textContent = "";
}, firstMsgDelay);

for (let i = msg1.length - 1; i >= 0; i--) {
    setTimeout(() => {
        welcomeText.textContent += msg1[i];
    }, i * timePerChar);
    setTimeout(
        () => {
            if (i == 0) {
                welcomeText.textContent = "";
            } else {
                welcomeText.textContent = msg1.substring(0, i);
            }
        },
        firstMsgDelay - (i * timePerChar) / 2,
    );
}

for (let i = 0; i < msg2.length; i++) {
    setTimeout(
        () => {
            welcomeText.textContent += msg2[i];
        },
        i * timePerChar + firstMsgDelay + 4 * timePerChar,
    );
}
