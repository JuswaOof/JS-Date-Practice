const currentDate = new Date();
const dateCountdown = new Date("Jan 1, 2023");

console.log(currentDate.getTime());
console.log(dateCountdown.getTime());

document.getElementById("date").innerHTML = currentDate;
document.getElementById("countdown").innerHTML = dateCountdown;
