// Reversed Words

// Complete the solution so that it reverses all of the words within the string passed in.

// Example:
// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

// Problem
function reverseWords(str) {
	return str; // reverse those words
}

// Solution
function reverseWords(str) {
	return str.split(' ').reverse().join(' ');
}
