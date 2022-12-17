// Assignment Code
var specialChar = "!@#$%^&*()_+=-[{]}|;:',<.>/?";
var lowerCase = "abcdefghijklmnopqrdtuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";

function generatePassword() {
  var passwordLength = prompt(
    "Password must contain between 8-128 characters."
  );
  var hasSpecialChar = confirm("Password must contain speicial characters.");
  var hasLowerCase = confirm("Password must contain lowercase letters.");
  var hasUpperCase = confirm("Password must contain uppercase letters.");
  var hasNumbers = confirm("Password must contain numbers.");
  var possiblePassword = "";
  var password = "";

  if (hasSpecialChar) {
    possiblePassword += specialChar;
    password += specialChar[Math.floor(Math.random() * specialChar.length)]
  }

  if (hasLowerCase) {
    possiblePassword += lowerCase;
    password += lowerCase[Math.floor(Math.random() * upperCase.length)]
  }

  
  if (hasUpperCase) {
    possiblePassword += upperCase;
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
  }

  if (hasNumbers) {
    possiblePassword += numbers;
    password += numbers[Math.floor(Math.random() * numbers.length)]
  }

  while (password.length != passwordLength) {
    let randomValue = Math.floor(Math.random() * possiblePassword.length); 
    password += possiblePassword[randomValue];
  }

  return password;
}

var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword(passswordText) {
  var password = generatePassword();
  var passswordText = document.querySelector("#password");
  passswordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
