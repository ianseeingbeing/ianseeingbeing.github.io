const hambergerToggle = document.getElementById('hambergerToggle');
const hambergerIconClosed = document.getElementById('hambergerIconClosed');
const hambergerIconOpen = document.getElementById('hambergerIconOpen');

const hambergerMenus = document.getElementsByClassName('hambergerMenu');

hambergerToggle.onchange = function() {
    if (hambergerToggle.checked) {
        hambergerMenus[0].hidden = false;
        hambergerIconClosed.hidden = true;
        hambergerIconOpen.hidden = false;
    }
    else {
        hambergerMenus[0].hidden = true;
        hambergerIconClosed.hidden = false;
        hambergerIconOpen.hidden = true;
    }
}