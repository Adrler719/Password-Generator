// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function randomInt(min, max){
  if(!max) {
    max=min
    min=0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list){
  return list[randomInt(list.length)]
}

function generatePassword(){
  console.log("Button clicked")
  // 1. Prompt the user for the password criteria
  //    a. Password length btw 8 & 128
  //    b. Lowercase, uppercase, numbers, special characters
  var userInput = window.prompt("Enter the amount of characters needed for your password.");
  
  var passwordLenght = parseInt(userInput)

  if (isNaN(passwordLenght)){
    window.alert("That is not a number! Please try again.")
    return
  }

  if (passwordLenght < 8 || passwordLenght >128){
    window.alert("Password length must be between 8 and 128 characters. Please try again.")
    return
  }

  //Prompting User
  var userLowercase = window.confirm("Would you like to include lowercase letters in your password?");
  var userUppercase = window.confirm("Would you like to include uppercase letters in your password?");
  var userNumbers = window.confirm("Would you like to include numbers in your password?");
  var userSpecialChar = window.confirm("Would you like to include speacil characters in your password?");

  // Creating arrays with all possible characters
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v","w","x","y","z"];
  var uppercaseList = [];
  var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialcharList = [" ","!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<",">","?","@","[","]","^","_","`","{","}","|","~"];
  // makes lowercaseList array all uppercase letters
  for(var i = 0 ; i < lowercaseList.length ; i++){
    uppercaseList[i] = lowercaseList[i].toUpperCase();
  }


  // Array to store user criteria selections
  var passwordOptions = [];

  if(userLowercase){
    passwordOptions.push(lowercaseList)
  }
  if(userUppercase){
    passwordOptions.push(uppercaseList)
  }
  if(userNumbers){
    passwordOptions.push(numbersList)
  }
  if(userSpecialChar){
    passwordOptions.push(specialcharList)
  }
  if(passwordOptions.length === 0){
    passwordOptions.push(lowercaseList)
  }

  var generatedPassword = "";

  for (var i = 0 ; i < passwordLenght ; i++){
    var randomList = getRandomItem(passwordOptions)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  return generatedPassword

  // 2. Validate the input.
  // 3. Generate password based on criteria.
  // 4. Display password to the page.
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
