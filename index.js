const dropdownMenuBtn = document.getElementById("menuBtn");
const dropdownMenuBtnIcon = document.getElementById("menuBtnIcon");
const dropdownMenu = document.getElementById("dropdownMenu");
const projectGrid = document.getElementById("projectGrid");

dropdownMenuBtn.onclick = function () {
    if (dropdownMenu.hidden) {
        dropdownMenu.hidden = false;
        dropdownMenuBtnIcon.style.transform = "rotate(180deg)";
        projectGrid.style.filter = "blur(3px)";
    } else {
        dropdownMenu.hidden = true;
        dropdownMenuBtnIcon.style.transform = "rotate(0deg)";
        projectGrid.style.filter = "none";
    }
};

console.log("hello");
