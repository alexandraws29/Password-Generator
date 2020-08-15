// Assignment code here


// Arrays for available options
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbolsArray = ["!", "#", "$", "%", "&", "*", "+", "-", ".", ";", ":", ">", "<", "@", "/", "|", "^", "~", "{", "}", "`", "_", "[", "]"]
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


// User input and prompts
var passLength = prompt ("How many characters would you like to include between 8 and 25")
var incUppercase = confirm ("Include Uppercase Letters?")
var incLowercase = confirm ("Include Lowercase Letters?")
var incSymbols = confirm ("Include Symbols?")
var incNumbers = confirm ("Include Numbers?")










// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
