// Find elements of html (buttons)
// Add object
const refs = {
    backgroundBody: document.querySelector('body'),
    switcherStart: document.querySelector('[data-start]'),
    switcherStop: document.querySelector('[data-stop]'),
};
// console.log(refs.backgroundBody);
// console.log(switcherStart);
let intervalId = 0;
// Add listeners for the buttons
refs.switcherStart.addEventListener('click', () => {
    intervalId = setInterval(() => {
        refs.backgroundBody.classList.add('bacground-color');
        refs.backgroundBody.style.backgroundColor = getRandomHexColor();
    }, 1000);
    // Blocking button startBtn after click
    refs.switcherStart.disabled = true;
});

refs.switcherStop.addEventListener('click', () => {
    clearInterval(intervalId);
    // Unblocking button startBtn after click to stopBtn
    refs.switcherStart.disabled = false;
});

// Function for a random color generate
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}