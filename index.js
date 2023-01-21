let characters;
characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let mainHeader = document.getElementById("header-el");
let subHeader = document.getElementById("subheader-el");
let messageHeader = document.getElementById("message-el");
let buttonHeader = document.getElementById("button-el");
let leftBox = document.getElementById("leftside-el");
let rightBox = document.getElementById("rightside-el");
let isPasswordGenerated

function randomGenerator() {
    let random = Math.floor(Math.random() * characters.length);
    return random
}
function superHeading() {
    mainHeader.textContent = "Generate a"
    subHeader.textContent = "random password"
}
function messageHeading() {
    messageHeader.textContent = "Never use an insecure password again"
}
function buttonHeading() {
    buttonHeader.textContent += "Generate passwords"
}

function randomPassword() {
    for (let i=0; i<=15; i++) {
        leftBox.textContent += characters[randomGenerator()]
    }
    for (let i=0; i<=15; i++) {
        rightBox.textContent += characters[randomGenerator()]
    }
}
function renderPassword() {
    leftBox.textContent = ""
    rightBox.textContent = ""
    randomPassword()
}

superHeading()
messageHeading()
buttonHeading()