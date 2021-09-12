// Is it a palindrome?

// Write function isPalindrom that checks if a given string (case insensitive) is a palindrom.

// Problem
function isPalindrome(x) {
	// your code here
}

// Solution
function isPalindrome(x) {
	let string = x.toLowerCase();
	let reverseVersion = string.split('').reverse().join('');
	if (string === reverseVersion) {
		return true;
	} else {
		return false;
	}
}
