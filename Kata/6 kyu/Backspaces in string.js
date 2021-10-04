// Backspaces in string

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

// Problem
function cleanString(s) {
	// ... your code ...
}

// Solution
// solution 1
function cleanString(s) {
	let result = '';
	for (let i = 0; i < s.length; i++) {
		if (s[i] !== '#') {
			result += s[i];
		} else {
			result = result.slice(0, -1);
		}
	}
	return result;
}

// solution 2
function cleanString(s) {
	let result = [];
	s.split('').forEach((ele) => {
		ele == '#' ? result.pop() : result.push(ele);
	});
	return result.join('');
}

// solution 3
function cleanString(s) {
	return s
		.split('')
		.reduce((acc, val) => {
			val === '#' ? acc.pop() : acc.push(val);
			return acc;
		}, [])
		.join('');
}
