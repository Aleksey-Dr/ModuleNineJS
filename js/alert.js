// Video. Asinchronus: timers
// Method setTimeout(callback, delay, args)
// Code
// console.log('Method setTimeout');

// console.log('Before calling setTimeout');

// setTimeout(() => {
//     console.log('Into function setTimeout (one)');
// }, 3000);

// setTimeout(() => {
//     console.log('Into function setTimeout (two)');
// }, 2000);

// console.log('Before calling setTimeout');
// End

// // Arguments of a method setTimeout
// // Code
// setTimeout(z => {
//     console.log(z);
// }, 3000, 'Goodbye!');

// setTimeout((x, y) => {
//     console.log(x);
//     console.log(y)
// }, 1500, 'Hello!', 'Between Hello and Goodbye!');
// // End

// // Cansel Timer
// // Code
// const logger = time => {
//     console.log(`Log after ${time}ms, because not cancelled timeout`);
// };

// const timerId = setTimeout(logger, 2000, 2000);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//     clearTimeout(timerId);
// }
// // End

// // Method setInterval(fn, delay, args); clearInterval
// // Code
// const logger = time => {
//     console.log(`Log each ${time}ms - ${Date.now()}`);
// };

// console.log('Before called setInterval');
// const intervalId = setInterval(logger, 2000, 2000);
// console.log('After called setInterval');

// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//     clearInterval(intervalId);
// }
// // End

// Example 1. Alert. PopUp
const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {
    notification: document.querySelector('.js-alert'),
};

// console.log(refs.notification);
refs.notification.addEventListener('click', onNotificationClik);

showNotification();

function onNotificationClik() {
    hideNotification();
    clearTimeout(timeoutId);
}

function showNotification() {
    refs.notification.classList.add('is-visible');

    timeoutId = setTimeout(() => {
        console.log('Close alert');
        hideNotification();
    }, NOTIFICATION_DELAY);
}

function hideNotification() {
    refs.notification.classList.remove('is-visible');
}
