// Find elements of html (buttons)
// Add object
const refs = {
    backgroundBody: document.querySelector('body'),
    switcherStart: document.querySelector('[data-start]'),
    switcherStop: document.querySelector('[data-stop]'),
};

// Add listeners for the buttons
refs.switcherStart.addEventListener('click', () =>
    colorSwitcher.startSwitcher(refs.backgroundBody, refs.switcherStart));

refs.switcherStop.addEventListener('click', () => colorSwitcher.stopSwitcher(refs.switcherStart));

const colorSwitcher = {
    intervalId: null,

    startSwitcher(backgroundBody, startBtn) {
        this.intervalId = setInterval(() => {
            backgroundBody.classList.add('bacground-color');
            backgroundBody.style.backgroundColor = this.getRandomHexColor();
        }, 1000);
        // Blocking button startBtn after click
        startBtn.disabled = true;
    },

    stopSwitcher(startBtn) {
        clearInterval(this.intervalId);
        // Unblocking button startBtn after click to stopBtn
        startBtn.disabled = false;
    },

    // Function for a random color generate
    getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    },
};