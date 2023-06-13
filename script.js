let homeScoreEl = document.getElementById('homeScore')
let homeScore = 0;

let guestScoreEl = document.getElementById('guestScore')
let guestScore = 0;

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

function incrementGuestOne() {
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function incrementGuestTwo() {
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function incrementGuestThree() {
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}