// Vowel remover

// Create a function called shortcut to remove all the lowercase vowels in a given string.

// Problem
function shortcut(string) {
	// code here
}

// Solution
// solution 1
function shortcut(string) {
	return string.replace(/[aeiou]/gi, '');
}

// solution 2
function shortcut(string) {
	let arr = [ 'a', 'e', 'i', 'o', 'u' ];
	return string.split('').filter((letter) => (arr.includes(letter) ? '' : letter)).join('');
}

// solution 3
function shortcut(string) {
	let vowels = 'aeiou';
	let output = '';
	for (let i = 0; i < string.length; i++) {
		if (!(vowels.indexOf(string[i]) > -1)) {
			output += string[i];
		}
	}
	return output;
}

// solution 4
function shortcut(string) {
	let letter = string.split('');
	let arr = [];
	for (let i = 0; i < letter.length; i++) {
		if (!(letter[i] == 'a' || letter[i] == 'e' || letter[i] == 'i' || letter[i] == 'o' || letter[i] == 'u')) {
			arr.push(letter[i]);
		}
	}
	return arr.join('');
}
