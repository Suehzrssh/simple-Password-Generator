const passwordbox = document.getElementById("password");
const length = 17;

const upperCase = "QWERTYUOPILKJHGFDSAZXCVBNM";
const lowerCase = "qwertyuioplkjhgfdsazxcvbnm";
const numbers = "0123456789";
const symbols = ".,:;-*|?=)(/&%+^'!}][{½$#£><";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = " ";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordbox.value = password;
}

function copyPassword() {
    if(passwordbox.value == "") {
        alert("şifre yok neyi kopyalayacan aq");
    }else {
    passwordbox.select();
    document.execCommand("copy");
    document.querySelector(".success").style.display = "block"
setTimeout(() => {
    document.querySelector(".success").style.display = "none"
}, 2000);
}
   
}