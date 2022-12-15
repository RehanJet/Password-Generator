// Assignment Code
var generateBtn = document.querySelector("#generate");


var specialChar = "!@#$%^&*()_+=-[{]}\|;:',<.>/?"
var lowerCase = "abcdefghijklmnopqrdtuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "0123456789"

function generatePassword() {
return 
 }


passwordLength = prompt("Password must contain between 8-128 characters.");
specialChar = confirm("Password must contain speicial characters.")
lowerCase = confirm("Password must contain lowercase letters.")
upperCase = confirm("Password must contain uppercase letters.")
numbers = confirm("Password must contain numbers.")








// Write password to the #password input
function writePassword(passswordText) {
  var password = generatePassword();
  var passswordText = document.querySelector("#password")

  passswordText.value = password;

}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


