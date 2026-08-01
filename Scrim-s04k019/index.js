let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0 
function oneHome() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function twoHome() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function threeHome() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestScore = 0
function oneGuest() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function twoGuest() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function threeGuest() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function reset() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}