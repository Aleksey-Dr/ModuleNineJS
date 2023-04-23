// Method setTimeout()

const body = document.querySelector('body');
const btn = document.createElement('button');
btn.classList.add('button');
btn.style.margin = '10px';
btn.style.height = '24px';
btn.style.width = '96px';
btn.style.backgroundColor = 'rgb(13, 220, 210)';
btn.textContent = 'TIMEOUT';
body.append(btn);

const onClick = () => {
    setTimeout(() => {
        alert('I love async JS!');
    }, 2000);
};

btn.addEventListener('click', onClick);

// // Method clearTimeout(id)
// // Code
// const greet = () => {
//     console.log('Hello!');
// };

// const timerId = setTimeout(greet, 3000);

// clearTimeout(timerId);
// // End

// Method setInterval()
const startBtn = document.createElement('button');
const stopBtn = document.createElement('button');

startBtn.style.height = '24px';
startBtn.style.width = '96px';
startBtn.style.margin = '10px';
startBtn.style.backgroundColor = 'rgb(27, 184, 67)';
startBtn.textContent = 'START';
startBtn.classList.add('js-start');

stopBtn.style.height = '24px';
stopBtn.style.width = '96px';
stopBtn.style.margin = '10px';
stopBtn.style.backgroundColor = 'rgb(209, 56, 56)';
stopBtn.textContent = 'STOP';
stopBtn.classList.add('js-stop');

body.append(startBtn, stopBtn);

// startBtn = document.querySelector('.js-start');
// stopBtn = document.querySelector('.js-stop');

let timerIntervalId = null;

startBtn.addEventListener('click', () => {
    timerIntervalId = setInterval(() => {
        console.log(`I love async JS! ${Math.random()}`);
    }, 1000);
});

stopBtn.addEventListener('click', () => {
    clearInterval(timerIntervalId);
    console.log(`Interval with id ${timerIntervalId} has stopped!`)
});

// Date and time
// Create date
const date = new Date;

console.log(date);
console.log(date.toString());

// Unix time
console.log(new Date(0));
console.log(new Date(15000));

// Method getTime()
console.log(date.getTime());

const newDate = new Date(2030, 2, 16, 14, 25, 0, 0);
console.log(newDate);

// // Methods
// // Getters
// // Code
// console.log('Date: ', date);
// // day of month
// console.log('getDate :', date.getDate());
// // day of week
// console.log('getDay :', date.getDay());
// // Month
// console.log('getMonth :', date.getMonth());
// // Year
// console.log('getFullYear :', date.getFullYear());
// // hours
// console.log('getHours :', date.getHours());
// // Minutes
// console.log('getMinutes :', date.getMinutes());
// // Seconds
// console.log('getSeconds :', date.getSeconds());
// // Milliseconds
// console.log('getMilliseconds :', date.getMilliseconds());
// // End