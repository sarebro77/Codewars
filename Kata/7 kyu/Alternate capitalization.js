// Alternate capitalization

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// Problem
function capitalize(s) {
	return [];
}

// Solution
function capitalize(s) {
	let evenOne = '';
	let oddTwo = '';

	for (let i = 0; i < s.length; i++) {
		if (i % 2 === 0) {
			evenOne += s[i].toUpperCase();
			oddTwo += s[i];
		} else {
			evenOne += s[i];
			oddTwo += s[i].toUpperCase();
		}
	}
	return [ evenOne, oddTwo ];
}
