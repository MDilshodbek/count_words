var string = "Hello my name is David";

var numberofwords = 0;

// Loop Method
var words = string.split(" ");
for (let i = 0; i < words.length; i++) numberofwords++;
console.log("Number of words:", numberofwords);

// Function Method;
// function count() {
//   var words = string.split(" ");
//   for (let i = 0; i < words.length; i++) numberofwords++;
//   return numberofwords;
// }

// console.log("Number of words:", count());

// ChatGPT;
// function count() {
//   var words = string.split(" ");
//   return words.length;
// }

// console.log("Number of words:", count());
