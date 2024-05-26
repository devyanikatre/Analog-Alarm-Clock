const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const setAlarmButton = document.getElementById('set-alarm');
const alarmTimeInput = document.getElementById('alarm-time');
const alarmStatus = document.getElementById('alarm-status');

let alarmTime = null;
let alarmTimeout = null;

function updateClock() {
    const now = new Date();
    const htime = now.getHours();
    const mtime = now.getMinutes();
    const stime = now.getSeconds();

    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;

    hourHand.style.transform = `rotate(${hrotation}deg)`;
    minuteHand.style.transform = `rotate(${mrotation}deg)`;
    secondHand.style.transform = `rotate(${srotation}deg)`;
}

function checkAlarm() {
    const now = new Date();
    const currentTime = now.getHours() + ":" + String(now.getMinutes()).padStart(2, '0');
    if (alarmTime && currentTime === alarmTime) {
        alarmStatus.textContent = "Alarm Ringing!";
        alarmStatus.style.color = 'red';
        clearTimeout(alarmTimeout);
        setTimeout(() => {
            alert("Wake up!");
        }, 1000);
    }
}

setInterval(() => {
    updateClock();
    checkAlarm();
}, 1000);

setAlarmButton.addEventListener('click', () => {
    alarmTime = alarmTimeInput.value;
    if (alarmTime) {
        alarmStatus.textContent = `Alarm set for ${alarmTime}`;
        alarmStatus.style.color = 'green';
    } else {
        alarmStatus.textContent = "Please set a valid time.";
        alarmStatus.style.color = 'red';
    }
});
