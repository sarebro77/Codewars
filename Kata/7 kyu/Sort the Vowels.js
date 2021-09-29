// Sort the Vowels!

// In this kata, we want to sort the vowels in a special format.

// Task
// Write a function which takes a input string s and return a string in the following way:

//                   C|                          R|
//                   |O                          n|
//                   D|                          d|
//    "CODEWARS" =>  |E       "Rnd Te5T"  =>      |
//                   W|                          T|
//                   |A                          |e
//                   R|                          5|
//                   S|                          T|

// Notes:

// List all the Vowels on the right side of |
// List every character except Vowels on the left side of |
// Return every character in its original case
// Each line is seperated with \n
// Invalid input ( undefined / null / integer ) should return an empty string

// Problem
function sortVowels(s) {
	// code here
}

// Solution
function sortVowels(s) {
	if (typeof s !== 'string') {
		return '';
	}
	let arr = [];
	for (let i = 0; i < s.length; i++) {
		if ('aeiou'.includes(s[i].toLowerCase())) {
			arr.push('|' + s[i]);
		} else {
			arr.push(s[i] + '|');
		}
	}
	return arr.join('\n');
}
