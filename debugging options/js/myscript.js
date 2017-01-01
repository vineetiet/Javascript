console.log(document.querySelector("#main"));

// It will show all the messages and properties of that elements
console.dir(document.querySelector("#main"));

console.info("some message");

console.group("Page_Links");
console.dir(document.querySelectorAll('a'));
console.groupEnd();

console.groupCollapsed("Paragraphs");
console.dir(document.querySelectorAll('p'));
console.groupEnd();


// This will tell how much time this loop will take to execute
console.time("BigLoop");
	for(var i=1000-1; i>=0; i--){

	};

	console.timeEnd("BigLoop");

console.assert(

	document.querySelectorAll('nav ol > li').length === 2,
	'Sorry, there is two menu items'

	);

