// Calculate Player Expenses
const calculatePlayerExpenses = document.getElementById("calculate-player-expenses");
calculatePlayerExpenses.addEventListener("click", function () {
    if (!isInputFieldEmpty("per-player-budget")) {
        const perPlayerBudget = getInputFieldValueById("per-player-budget");
        const playerExpenses = getTotalValue((players.length) * perPlayerBudget);
        setTextElementValueById("player-expenses", playerExpenses);
    }
    else {
        alert("Per player budget is required.");
    }
})


// Calculate Total
const calculateTotal = document.getElementById("calculate-total");
calculateTotal.addEventListener("click", function () {
    if (!isInputFieldEmpty("manager-budget") && !isInputFieldEmpty("coach-budget") && !isInputFieldEmpty("per-player-budget")) {
        const managerBudget = getInputFieldValueById("manager-budget");
        const coachBudget = getInputFieldValueById("coach-budget");
        const playerExpenses = getTextElementValueById("player-expenses");
        const totalBudget = getTotalValue(playerExpenses + managerBudget + coachBudget);
        setTextElementValueById("total-budget", totalBudget);
    }
    else {
        if (isInputFieldEmpty("manager-budget") && isInputFieldEmpty("coach-budget") && isInputFieldEmpty("per-player-budget")) {
            alert("Manager,Coach and Per Player budget is required.");
        }
        else if (isInputFieldEmpty("manager-budget") && isInputFieldEmpty("coach-budget")) {
            alert("Manager and Coach budget is required.");
        }
        else if (isInputFieldEmpty("manager-budget") && isInputFieldEmpty("per-player-budget")) {
            alert("Manager and Per Player budget is required.");
        }
        else if (isInputFieldEmpty("coach-budget") && isInputFieldEmpty("per-player-budget")) {
            alert("Coach and Per Player budget is required.");
        }
        else if (isInputFieldEmpty("manager-budget")) {
            alert("Manager budget is required.");
        }
        else if (isInputFieldEmpty("coach-budget")) {
            alert("Coach budget is required.");
        }
        else {
            alert("Per player budget is required.");
        }
    }
})
