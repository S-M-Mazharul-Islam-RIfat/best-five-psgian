function getInputFieldValueById(inputFieldId) {
    return parseFloat(document.getElementById(inputFieldId).value);
}

function getTextElementValueById(elementId) {
    return parseFloat(document.getElementById(elementId).innerText);
}

function getTotalValue(totalValue) {
    return parseFloat(totalValue.toFixed(2));
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

