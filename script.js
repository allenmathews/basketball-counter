let homeScoreEl = document.getElementById('homeScore')
let homeScore = 0;

function incrementHomeOne() {
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function incrementHomeTwo() {
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function incrementHomeThree() {
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}