//root qury all count
let days = document.querySelector(".days .num");
let sec = document.querySelector(".seconds .num");
let min = document.querySelector(".minutes .num");
let hour = document.querySelector(".hour .num");

// count seconds

let intSec = setInterval(() => {
  i = 1;
  if (sec.innerHTML <= 0) {
    sec.innerHTML = 60;
  } else {
    sec.innerHTML--;
  }
}, 1000);
// count minutes
let intMinutes = setInterval(() => {
  i = 1;
  if (min.innerHTML <= 0) {
    min.innerHTML = 60;
  } else {
    min.innerHTML--;
  }
}, 1000 * 60);
//count hour
let intHour = setInterval(() => {
  i = 1;
  if (hour.innerHTML <= 0) {
    hour.innerHTML = 60;
  } else {
    hour.innerHTML--;
  }
}, 1000 * 60 * 60);

//count day
let intDay = setInterval(() => {
  i = 1;
  if (days.innerHTML <= 0) {
    days.innerHTML = 60;
  } else {
    days.innerHTML--;
  }
}, 1000 * 60 * 60);
