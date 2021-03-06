// variables to be randomly selected
var lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "~",
    "&",
    "*",
    "(",
    ")",
    "+",
    "?",
    ",",
    ".",
    ";",
    "[",
    "]",
  ];
  // global variables
  var passwordLength;
  var uppercaseC;
  var lowercaseC;
  var numberC;
  var specialC;
  // empty string
  var possibleChar = [];

  // begin password function
function generatePassword() {
    var currentPassword = "";
    
    passwordLength = prompt(
      "Character length must be at least 8 and no more than 128. Enter character lenth below:"
    );
  
    if (passwordLength < 8) {
          alert("Character length must be at least 8 and no more than 128.");
    } else if (passwordLength > 128) {
          alert("Character length must be at least 8 and no more than 128.");
    }
    // call get length


  // check if they want to use uppercase
  uppercaseC = confirm("Do you want to use uppercase characters?");
  // check if they want to use lowecase
  lowercaseC = confirm("Do you want to use lowercase characters?");
  // check if they want to use special characters
  specialC = confirm("Do you want to use special characters?");
  // check if they want to use number 
  numberC = confirm("Do you want to use numbers?");

  if (uppercaseC) {
    // add uppercase to possible characters
    possibleChar = possibleChar.concat(uppercase);
  }

  if (lowercaseC) {
    // add lowecase to possible characters
    possibleChar = possibleChar.concat(lowercase);
  }

  if (specialC) {
    // add special to possible characters
    possibleChar = possibleChar.concat(special);
  }

  if (numberC) {
    // add number to possible characters
    possibleChar = possibleChar.concat(number);
  }

  for (var i = 0; i < passwordLength; i++) {
    //randomly pick a character on each run of the loop
    var index = Math.floor(Math.random() * possibleChar.length);
    var char = possibleChar[index];
    //adding to the password placeholder
    currentPassword += char;
  }
  return currentPassword;
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
