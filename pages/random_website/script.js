const randomButton = document.getElementById("randomBtn");

let websites = [
    "https://libraryofbabel.info/",
    "https://www.wikipedia.org/",
    "https://creativecommons.org/",
    "https://kernel.org/",
    "https://findtheinvisiblecow.com/",
    "https://papertoilet.com/",
    "https://pointerpointer.com/",
    "https://web.archive.org/",
    "https://play2048.co/",
    "https://musclewiki.com/",
    "https://www.omfgdogs.com/#",
    "https://quickdraw.withgoogle.com/",
    "https://www.ocearch.org/tracker/?list=",
    "https://monkeytype.com/",
];

randomButton.onclick = function () {
    window.location.href =
        websites[Math.floor(Math.random() * websites.length)];
};
