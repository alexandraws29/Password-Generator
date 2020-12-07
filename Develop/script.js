// Assignment code here


// Arrays for available options
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var symbols = "0123456789"
var numbers = "!@#$%^&*()_+-"


// User input and prompts
function generatePassword (){
  var passLength = (window.prompt ("How many characters would you like to include (be sure to select more than 8)"))
  var incUppercase = confirm ("Include Uppercase Letters?")
  var incLowercase = confirm ("Include Lowercase Letters?")
  var incSymbols = confirm ("Include Symbols?")
  var incNumbers = confirm ("Include Numbers?")




// Generating password
  var included = "";
  if (incUppercase) {
    included = included + uppercase;
  } if (incLowercase) { 
    included = included + lowercase; 
  } if (incSymbols) { 
    included = included + symbols;
  } if (incNumbers) { 
    included = included + numbers;
  }



  var result = ""
  for(var i = 0; i < passLength; i++) {
    var inc = Math.floor(Math.random() * included.passLength)
    result += included.charAt(inc);
  }
  
  alert(result);
}










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
