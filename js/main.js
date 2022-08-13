// query all Element
var days = document.querySelector(".days .num");
var hour = document.querySelector(".hour .num");
var minutes = document.querySelector(".minutes .num");
var seconds = document.querySelector(".seconds .num");
var time = {
    days: +days.innerHTML,
    hour: +hour.innerHTML,
    minutes: +minutes.innerHTML,
    seconds: +seconds.innerHTML
};
var myInterval = setInterval(allFunctions, 1000);
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
    days.innerHTML = "0".concat(time.days);
    hour.innerHTML = "".concat(time.hour);
    minutes.innerHTML = "".concat(time.minutes);
    seconds.innerHTML = "".concat(time.seconds);
}
function formateData() {
    hour.innerHTML.length == 1
        ? (hour.innerHTML = "0".concat(hour.innerHTML))
        : (hour.innerHTML = "".concat(hour.innerHTML));
    minutes.innerHTML.length == 1
        ? (minutes.innerHTML = "0".concat(minutes.innerHTML))
        : (minutes.innerHTML = "".concat(minutes.innerHTML));
    seconds.innerHTML.length == 1
        ? (seconds.innerHTML = "0".concat(seconds.innerHTML))
        : (seconds.innerHTML = "".concat(seconds.innerHTML));
}
