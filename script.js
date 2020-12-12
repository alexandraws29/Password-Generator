// Assignment code here


// Arrays for available options
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var symbols = "!@#$%^&*()_+-"


// function that asks what to include from the arrays above
function generatePassword (){
  var passLength = (window.prompt ("How many characters would you like to include (be sure to select between 8 and 100)"))
  while (passLength <= 7 || passLength >= 101){
    alert("Please select a number between 8 and 100")
    var passLength = (window.prompt ("How many characters would you like to include (be sure to select between 8 and 100)"))
  }
    var incUppercase = confirm ("Include Uppercase Letters?")
    var incLowercase = confirm ("Include Lowercase Letters?")
    var incSymbols = confirm ("Include Symbols?")
    var incNumbers = confirm ("Include Numbers?")
  

  


// Determine what will be included based on the user's choice from the questions above
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


  // Loop to create the password itself using the information gathered above
  var result = ""
    for (var i = 0; i < passLength; i++) {
      result = result + included[Math.floor(Math.random() * included.length)];
    }
    
    return(result);

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
