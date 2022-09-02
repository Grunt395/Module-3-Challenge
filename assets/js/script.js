// Arrays for special characters to be included

var specialCharacters = ["@","%","+","-","*","[","]",
                         "~","_",".","/", "?","!","\\"]

var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"]

var lowerCaseCharacters = ["a","b","c","d","e","f","g","h","i",
                           "j","k","l","m","n","o","p","q","r",
                           "s","t","u","v","w","x","y","z"]

var upperCaseCharacters = ["A","B","C","D","E","F","G","H","I",
                           "J","K","L","M","N","O","P","Q","R",
                           "S","T","U","V","W","X","Y","Z"]

function getPasswordOptions () {
  var length = parseInt(prompt("How many characters would you like your password to contain?"), 10);

  if (Number.isNaN(length)) {
    alert("Password length must be provided as a number");
    return null;
  }

  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return null;
  }

  if(length > 128) {
    alert("Password length must be less than 129 characters");
    return null;
  }

  var hasspecialCharacters = confirm(
    "Click OK to confirm including special characters"
  )
  var hasnumericCharacters = confirm(
    "Click OK to confirm including number characters"
  )
  var haslowerCaseCharacters = confirm(
    "Click OK to confirm including lowercase characters"
  )
  var hasupperCaseCharacters = confirm(
    "Click OK to confirm including uppercase characters"
  )

  if (hasspecialCharacters === false && hasnumericCharacters === false 
    && haslowerCaseCharacters === false && hasupperCaseCharacters === false) {
    alert("Must select at least one character type");
    return null;
  }

  var passwordOptions = {
    length: length,
    hasspecialCharacters: hasspecialCharacters,
    hasnumericCharacters: hasnumericCharacters,
    haslowerCaseCharacters: haslowerCaseCharacters,
    hasupperCaseCharacters: hasupperCaseCharacters
  }

  return passwordOptions;

}

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

// Generate Function
function generatePassword() {
  var options = getPasswordOptions();
  var results = []

  var possibleCharacters = [];

  var guaranteedCharacters = [];

  if (!options) {
    return null;
  }

  if (options.hasspecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  
  if (options.hasnumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters)
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.haslowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters)
    guaranteedCharacters.push(getRandom(lowerCaseCharacters));
  }
  
  if (options.hasupperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters)
    guaranteedCharacters.push(getRandom(upperCaseCharacters));
  }

  for (var index = 0; index < options.length; index++) {
    var possibleCharacter = getRandom(possibleCharacters);
    results.push(possibleCharacter);
  }

  for (var index = 0; index < guaranteedCharacters.length; index++) {
    results[index] = guaranteedCharacters[index];
  }

  return results.join("");

}


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
