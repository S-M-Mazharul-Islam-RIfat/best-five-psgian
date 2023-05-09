let players = [];
function selectBestFivePlayers(singlePlayer) {
    singlePlayer.addEventListener("click", function (event) {
        if (players.length < 5) {
            // get selected player name
            const playerName = event.target.getAttribute("player-name");
            players.push(playerName);

            // disable the button of selected player
            event.target.setAttribute("disabled", true);
            event.target.setAttribute("class", event.target.getAttribute("class") + " disabled-btn-style");

            // create list item for selected player
            const player = document.createElement("li");
            player.innerText = playerName;

            // set selected player name style
            player.setAttribute("class", "player-name-style pt-4 ps-3 ms-3")

            // append selected player in selected-V container
            const selectedV = document.getElementById("selected-V");
            selectedV.appendChild(player);
        }
        else {
            alert("You have already selected best five players.");
        }
    })
}

// select all players and then select best five among them.
const selctAllPlayers = document.querySelectorAll(".select-player");
selctAllPlayers.forEach(function (singlePlayer) {
    selectBestFivePlayers(singlePlayer);
})