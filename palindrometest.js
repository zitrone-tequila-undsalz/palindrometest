const readlineSync = require('readline-Sync');
const minLength = 3;
console.log('***Palindrome-generator***');

let input;
let i = 0;
let isPalindrome = true;

do {
  input = readlineSync.question('Enter the input: ');

  if (input.length < minLength) {
    console.log(`Your input is shorter than ${minLength} characters  `);
  }
} while (input.length < minLength);

const word = input.replace(/\s+/g, '').toUpperCase();

const normal = [...word];
const flipped = [...normal].reverse();

while (i < normal.length) {
  if (normal[i] !== flipped[i]) {
    isPalindrome = false;
  }
  i++;
}

console.log(
  ` Your input "${input}" ${isPalindrome ? 'is a' : 'is not'} palindrome `
);
