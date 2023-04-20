const str = 'Hello';
const str1 = str.split('')
const str2 = str1.reverse()
const str3 = str2.join('')
console.log(str3);

// we can do it in a single step
const strr = str.split('').reverse().join('');
console.log(strr);