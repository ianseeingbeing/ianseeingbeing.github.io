const hambergerToggle = document.getElementById('hambergerToggle');
const hambergerIconClosed = document.getElementById('hambergerIconClosed');
const hambergerIconOpen = document.getElementById('hambergerIconOpen');

hambergerToggle.onchange = function() {
    if (hambergerToggle.checked) {
        openMenu();
        hambergerIconClosed.hidden = true;
        hambergerIconOpen.hidden = false;
    }
    else {
        closeMenu();
        hambergerIconClosed.hidden = false;
        hambergerIconOpen.hidden = true;
    }
}

function openMenu() {
    console.log('open') 
}

function closeMenu() {
    console.log('closed')
}