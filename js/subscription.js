// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
        // clearInterval(intervalId);
//         console.log('Stop interval');
//         return;
//     }
//     console.log('Subscribe to the newsletter! - ' + Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY);

// BOOTSTRAP.NATIVE
// initialize on a <div class="modal"> with all options
const modal = new BSN.Modal('#subscription-modal');

// Find elements from html
const refs = {
    modal: document.querySelector('#subscription-modal'),
    subscribeBtn: document.querySelector('button[data-subscribe]'),
}

// console.log(modal);

const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0;
let hasSubscribed = false;
let timerId = null;

// Event "hide.bs.modal"
// from Bootstrap.native(https://thednp.github.io/bootstrap.native/)
refs.modal.addEventListener('hide.bs.modal', () => {
    console.log('Close modal window');
    openModal();
    if (MAX_PROMPT_ATTEMPTS > promptCounter && !hasSubscribed) {
        console.log('Repeating the modal window show');
    }
});

refs.subscribeBtn.addEventListener('click', () => {
    hasSubscribed = true;
    modal.hide();
    console.log(timerId);
    console.log('Go to subscribe form');
});

openModal();

function openModal() {
    if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
        console.log('Stopping opening modal window');
        return;
    }
        
    timerId = setTimeout(() => {
        modal.show();
        console.log('Show modal window');
        promptCounter += 1;
    }, PROMPT_DELAY);
}