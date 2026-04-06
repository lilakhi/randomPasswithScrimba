const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pass1 = document.getElementById("password1");
const pass2 = document.getElementById("password2");

function generate() {
    let word1 = "";
    let word2 = "";
    for (i = 0; i < 15; i++) {
        let randomChar = Math.floor(Math.random() * characters.length);
        word1 += characters[randomChar];
    }
    for (i = 0; i < 15; i++) {
        let randomChar = Math.floor(Math.random() * characters.length);
        word2 += characters[randomChar];
    }
    
    pass1.textContent = word1;
    pass2.textContent = word2;
    
    }


