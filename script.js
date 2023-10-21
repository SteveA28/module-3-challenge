// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomNumber(max) {
  var randomNumber = Math.floor(Math.random() * (max + 1));
  return randomNumber;
}

function getRandomElementFromArray(array) {
  var randomPosition = getRandomNumber(array.length - 1);
  return array[randomPosition];
}

function generatePassword() {
  var password = "";
  var length = 10;

  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  var allChars = lowercaseChars + uppercaseChars + numericChars + specialChars;

  for (var i = 0; i < length; i++) {
    var randomChar = getRandomElementFromArray(allChars);
    password += randomChar;
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);