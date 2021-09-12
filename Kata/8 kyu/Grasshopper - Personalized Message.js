// Grasshopper - Personalized Message

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// case 	              return
// name equals owner 	 'Hello boss'
// otherwise 	         'Hello guest'

// Problem
function greet(name, owner) {
	// Add code here
}

// Solution
function greet(name, owner) {
	let sup = 0;

	if (name === owner) {
		sup = 'Hello boss';
	} else {
		sup = 'Hello guest';
	}

	return sup;
}
