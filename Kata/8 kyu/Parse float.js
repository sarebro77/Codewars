// Parse float

// Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.

// Problem
function parseF(s) {
	return null;
}

// Solution
function parseF(s) {
	let number = parseFloat(s);
	if (isNaN(number)) {
		return null;
	} else {
		return number;
	}
}
