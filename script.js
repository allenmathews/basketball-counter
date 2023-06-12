let guest = 0;
let home = 0;
document.getElementById('guest').textContent = guest;
document.getElementById('home').textContent = home;

let score = document.getElementById('score')

function plusone() {
    score = guest + 1;
    score.textContent = "Score: " + score;
}

function plustwo() {
    score = guest + 1;
    score.textContent = "Score: " + score;

}