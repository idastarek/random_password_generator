const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let buttonEl = document.getElementById("btn-el");
let passEl1 = document.getElementById("pass-el-1");
let passEl2 = document.getElementById("pass-el-2");


function generatePasswords() {
    console.log("Clicked button");
    let lengthInput = Number(document.getElementById("password-length").value);
    if (passEl1.textContent == "" && passEl2.textContent == "") {
        console.log("Empty password divs");
        for (i=0; i<=lengthInput-1; i++){
            passEl1.textContent += characters[Math.floor(Math.random()*characters.length)];
            passEl2.textContent += characters[Math.floor(Math.random()*characters.length)];
        } 
    } else {
        console.log("Passwords already generated")
        passEl1.textContent = "";
        passEl2.textContent = "";
        for (i=0; i<=lengthInput; i++) {
            passEl1.textContent += characters[Math.floor(Math.random()*characters.length)];
            passEl2.textContent += characters[Math.floor(Math.random()*characters.length)];
        }
    }
    
}