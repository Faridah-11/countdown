'use strict'


let dest = new Date("jun 27, 2024 00:00:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let diff = dest - now;

    // Check if the countdown has reached zero or negative
    if (diff <= 0) {
        clearInterval(x); 
        return; 
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);
    if (days < 10) {
        days = `0${days}`;
    }
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    document.querySelector('.days').textContent = days
    document.querySelector('.hours').textContent = hours
    document.querySelector('.minutes').textContent =minutes
    document.querySelector('.seconds').textContent = seconds
}, 1000);
                    