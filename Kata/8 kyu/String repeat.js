// String repeat

// Write a function called repeatStr which repeats the given string string exactly n times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// Problem
function repeatStr(n, s) {
	return '';
}

// Solution
function repeatStr(n, s) {
	let rep = '';
	for (let i = 0; i < n; i++) {
		rep += s;
	}
	return rep;
}
