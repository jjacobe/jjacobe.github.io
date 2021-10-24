// Toggle nav menu
function toggleMenu() {
    document.getElementById("navBar").classList.toggle("hide")
}
// Create formating for last updated information
var weekdays = new Array(
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    );
var months = new Array(
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    );
const year = new Date().getFullYear();
const lastModified = new Date(document.lastModified);
var day = lastModified.getDay();
var day = weekdays[day];
var month = lastModified.getMonth();
var month = months[month];

var lastModifiedFormatted = day + ', ' + lastModified.getDate() + ' ' + month + " " + lastModified.getFullYear();

// Display copyright year and date last modified
document.getElementById("copyrightYear").textContent = year;
document.getElementById("dateLastModified").textContent = lastModifiedFormatted;

// Friday pancake banner
function createBanner(day) {
    if (day == "Friday") {
        document.querySelector("#banner").style.display = "block";
    }
}
createBanner(day);

// Wind chill function
let temp = document.querySelector('#curTemp').innerText;
let speed = document.querySelector('#curSpeed').innerText;

buildWC(speed, temp);

// Calculate the Windchill
function buildWC(speed, temp) {
    let wcTemp = document.getElementById('windchill');
   
    // Compute the windchill
    let wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
    console.log('windchill 01: ' + wc);
   
    // Round the answer down to integer
    wc = Math.floor(wc);
    console.log('windchill 02: ' + wc);
    console.log(temp);
    // If chill is greater than temp, return the temp
    wc = (wc > temp) ? temp : wc;
    console.log('windchill 03: ' + wc);
   
    // Display the windchill
    console.log('windchill 04: ' + wc);
    wc = wc+'°F';
    wcTemp.innerHTML = wc;
    }