function isInputNumber(event) {
    if (players.length === 0) {
        alert("Please select players.");
        event.preventDefault();
    }
    let char = String.fromCharCode(event.which);
    if (char !== '.') {
        char = parseInt(char);
    }
    if (!((char >= 0 || char <= 9) || char === '.')) {
        event.preventDefault();
    }
}

function isInputFieldEmpty(elementId) {
    if (document.getElementById(elementId).value === "") {
        return true;
    }
    else {
        return false;
    }
}
