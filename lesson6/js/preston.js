// Date function
let weekday = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
let d = new Date();
let dayName = weekday[d.getDay()];
let monthName = months[d.getMonth()];
let fullDate = dayName + ", " + d.getDate() + " " + monthName + " "  + d.getFullYear();
document.getElementById("dateLastMod").textContent = fullDate;

const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

// Menu
function toggleMenu() {
    document.getElementById("menu").classList.toggle("navigation")
}

// Pancake banner
let pancakeDay = new Date();
if (pancakeDay.getDay() == 5) {
   document.querySelector('#pancake').getElementsByClassName.display = 'flex';
}

// Wind chill function
let temp = document.querySelector('#curTemp').innerText;
let speed = document.querySelector('#curSpeed').innerText;
buildWC(speed, temp);
function buildWC(speed, temp) {
    let wcTemp = document.getElementById('windchill');
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log('windchill 01: ' + wc);
    wc = Math.floor(wc);
    console.log('windchill 02: ' + wc);
    console.log(temp);
    wc = (wc > temp) ? temp : wc;
    console.log('windchill 03: ' + wc);
    console.log('windchill 04: ' + wc);
    wc = wc+'°F';
    wcTemp.innerHTML = wc;
    }