let team1 = 0
let team2 = 0

function increaseTeam1Score() {

    var team1Score = 1 + team1++
    document.getElementById("team1Score").innerText = team1Score;

    if (team1Score > 20) {
        return
    }


}

function increaseTeam2Score() {
    var team2Score = 1 + team2++
    document.getElementById('team2Score').innerText = team2Score;
}

function resetTeam1() {
    team1 = 0;
    document.getElementById('team1Score').innerHTML = 0;
}

function resetTeam2() {
    team2 = 0;
    document.getElementById('team2Score').innerHTML = 0;
}

