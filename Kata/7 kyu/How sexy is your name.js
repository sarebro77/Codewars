// How sexy is your name?

// How sexy is your name? Write a program that calculates how sexy one's name is according to the criteria below.

// There is a preloaded dictionary of letter scores called SCORES(Python & JavaScript) / $SCORES (Ruby). Add up the letters (case-insensitive) in your name to get your sexy score. Ignore other characters.

// SCORES = {'A': 100, 'B': 14, 'C': 9, 'D': 28, 'E': 145, 'F': 12, 'G': 3,
//               'H': 10, 'I': 200, 'J': 100, 'K': 114, 'L': 100, 'M': 25,
//               'N': 450, 'O': 80, 'P': 2, 'Q': 12, 'R': 400, 'S': 113, 'T': 405,
//               'U': 11, 'V': 10, 'W': 10, 'X': 3, 'Y': 210, 'Z': 23}

// The program must return how sexy one's name is according to the "Sexy score ranking" chart.
// score <= 60:   'NOT TOO SEXY'
// 61 <= score <= 300:  'PRETTY SEXY'
// 301 <= score <= 599:  'VERY SEXY'
//       score >= 600:  'THE ULTIMATE SEXIEST'

// Problem
function sexyName(name) {
	// code here
}

// Solution
// solution 1
function sexyName(name) {
	console.log(name, ' >>> name');
	//SPLIT NAME INTO ARRAY OF LETTERS
	let letters = name.toUpperCase().split('');
	console.log(letters, ' >>> letters');

	//FILTER CHARACTERS NOT LETTERS
	let onlyLetters = letters.filter((letter) => letter.match(/[a-z]/i));
	console.log(onlyLetters, ' >>> onlyLetters');

	//MAP NEW ARRAY AND ADD TOTAL
	let sum = onlyLetters.reduce((acc, eachLetter) => (acc += SCORES[eachLetter]), 0);
	console.log(sum, ' >>> sum');

	return sum <= 60 ? 'NOT TOO SEXY' : sum <= 300 ? 'PRETTY SEXY' : sum <= 599 ? 'VERY SEXY' : 'THE ULTIMATE SEXIEST';
}

// solution 2
function sexyName(name) {
	let sum = name
		.toUpperCase()
		.split('')
		.filter((letter) => letter.match(/[a-z]/i))
		.reduce((acc, letter) => acc + SCORES[letter], 0);
	return sum <= 60 ? 'NOT TOO SEXY' : sum <= 300 ? 'PRETTY SEXY' : sum <= 599 ? 'VERY SEXY' : 'THE ULTIMATE SEXIEST';
}

// solution 3
function sexyName(name) {
	let score = 0;
	for (letter of name.toUpperCase()) {
		if (SCORES[letter] >= 0) score += SCORES[letter];
	}
	if (score <= 60) return 'NOT TOO SEXY';
	else if (score == 61 || score <= 300) return 'PRETTY SEXY';
	else if (score == 301 || score <= 599) return 'VERY SEXY';
	else return 'THE ULTIMATE SEXIEST';
}
