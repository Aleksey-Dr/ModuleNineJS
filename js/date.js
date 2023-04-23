// // Date
// const date = new Date();

// // Day
// console.log('Day:  ', date.getDay());
// // Month
// console.log('Month:', + date.getMonth());

// // Unix
// console.log(date.getTime());

// Method Date.now()
console.log('Method Date.now()');

const date1 = Date.now();
console.log('Date 1:', date1);

setTimeout(() => {
    const date2 = Date.now();

    console.log('Date 1:', date1);
    console.log('Date 2:', date2);

    console.log(date2 - date1);
}, 3000);