// IIFE

(function() {
    console.log('This will never run again');
    const isPrivate = 20;
})();

// console.log(isPrivate); this will give error

(() => console.log('This will also never run again'))();