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

  var length = parseInt(
    prompt("Enter the password length (between 8 and 128 characters):")
  );

  if (isNaN(length) || length < 8 || length > 128) {
    alert("Invalid input. Please enter a valid password length.");
    return;
  }

  var includeLowercase = confirm("Include lowercase characters?");

  var includeUppercase = confirm("Include uppercase characters?");

  var includeNumeric = confirm("Include numeric characters?");

  var includeSpecial = confirm("Include special characters?");

  var lowercaseChars = includeLowercase ? "abcdefghijklmnopqrstuvwxyz" : "";
  var uppercaseChars = includeLowercase ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";
  var numericChars = includeLowercase ? "0123456789" : "";
  var specialChars = includeLowercase ? "!@#$%^&*()_+-=[]{}|;:,.<>?" : "";
  var allChars = lowercaseChars + uppercaseChars + numericChars + specialChars;

  if (allChars === "") {
    alert("You must select at least one character type.");
    return;
  }

  for (var i = 0; i < length; i++) {
    var randomChar = getRandomElementFromArray(allChars);
    password += randomChar;
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);