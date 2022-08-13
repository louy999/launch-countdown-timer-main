// query all Element

let days = document.querySelector(".days .num") as HTMLDivElement;
let hour = document.querySelector(".hour .num") as HTMLDivElement;
let minutes = document.querySelector(".minutes .num") as HTMLDivElement;
let seconds = document.querySelector(".seconds .num") as HTMLDivElement;

let time = {
  days: +days.innerHTML,
  hour: +hour.innerHTML,
  minutes: +minutes.innerHTML,
  seconds: +seconds.innerHTML,
};

let myInterval = setInterval(allFunctions, 1000);

// collation all function for set interval
function allFunctions() {
  countDown();
  setDataInPage();
  formateData();
}

function countDown() {
  time.seconds--;
  if (time.seconds == 0) {
    time.seconds = 60;
    time.minutes--;
  }
  if (time.minutes == 0) {
    time.minutes = 60;
    time.hour--;
  }
  if (time.hour == 0) {
    time.hour = 60;
    time.days--;
  }
  if (time.days == 0) {
    clearInterval(myInterval);
  }
}

function setDataInPage() {
  days.innerHTML = `0${time.days}`;
  hour.innerHTML = `${time.hour}`;
  minutes.innerHTML = `${time.minutes}`;
  seconds.innerHTML = `${time.seconds}`;
}

function formateData() {
  hour.innerHTML.length == 1
    ? (hour.innerHTML = `0${hour.innerHTML}`)
    : (hour.innerHTML = `${hour.innerHTML}`);
  minutes.innerHTML.length == 1
    ? (minutes.innerHTML = `0${minutes.innerHTML}`)
    : (minutes.innerHTML = `${minutes.innerHTML}`);
  seconds.innerHTML.length == 1
    ? (seconds.innerHTML = `0${seconds.innerHTML}`)
    : (seconds.innerHTML = `${seconds.innerHTML}`);
}
