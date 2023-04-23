// Find elements
// Add object
const refs = {
    startBtn: document.querySelector('[data-action-start]'),
    stopBtn: document.querySelector('[data-action-stop]'),
    clockface: document.querySelector('.js-clockface'),
};
// console.log(startBtn);

// Create class
class Timer {
    constructor({ onTick }) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
    }

    start() {

        if (this.isActive) {
            return;
        }
        // Check by on active start timer
        // Time of start
        const startTime = Date.now();

        this.isActive = true;

        // Interval
        this.intervalId = setInterval(() => {
            // Current time
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);

            this.onTick(time);
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        // Clear interface to '00:00:00'
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }

    getTimeComponents(time) {
        const hours
            = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins
            = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs
            = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        
        return { hours, mins, secs };
    }
}

// Add listener for html elements
refs.startBtn.addEventListener('click', () => timer.start());
refs.stopBtn.addEventListener('click', () => timer.stop());

const timer = new Timer({
    onTick: updateClockface,
});

// Object with methods
// const timer = {

//     intervalId: null,
//     isActive: false,

//     start() {

//         if (this.isActive) {
//             return;
//         }
//         // Check by on active start timer
//         // Time of start
//         const startTime = Date.now();
//         // let number = 0;

//         this.isActive = true;

//         // Interval
//         this.intervalId = setInterval(() => {
//             // Current time
//             const currentTime = Date.now();
//             // console.log('start -> currentTime', currentTime);
//             const deltaTime = currentTime - startTime;
//             const { hours, mins, secs } = getTimeComponents(deltaTime);

//             updateClockface({ hours, mins, secs });

//             // console.log(`${hours}:${mins}:${secs}`);

//             // console.log('start -> startTime', startTime);
//             // number += 1;
//             // console.log('Hello!', number);
//         }, 1000);
//     },

//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//     },
// };

// Function for show clockface
function updateClockface({ hours, mins, secs }) {
    refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}

// timer.start();

// function pad(value) {
//     return String(value).padStart(2, '0');
// }

// function getTimeComponents(time) {
//     const hours
//         = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins
//         = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs
//         = pad(Math.floor((time % (1000 * 60)) / 1000));
    
//     return { hours, mins, secs };
// }
