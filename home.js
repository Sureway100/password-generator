const pwEl = document.getElementById("pw");
const copyEl = document.getElementById("copy");
const lenEl = document.getElementById("len");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const generateEl = document.getElementById("generate");

// give these checkbox id values they will select from
const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";



//NB the * x means range
function getUppercase(){

    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];
}

//alert(getLowercase());
//alert(getUppercase());
//alert(getNumber());
//alert(getSymbol());

function generatePassword() {
//grab whatever user says to be password length
    const len = lenEl.value;

    let password = "";
//if user checks fields
    if (upperEl.checked) {
        password += getUppercase();
    }

    if (lowerEl.checked) {
        password += getLowercase();
    }

    if (numberEl.checked) {
        password += getNumber();
    }

    if (symbolEl.checked) {
        password += getSymbol();
    }

//console.log(password.length); this will be 4 if you checked all 4 
    //this check the password length and makes sure is still within user target
    for (let i = password.length; i < len; i++) {
    //so when generatex is called, it outputs the result of line xs into x
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

//if user checks upper field or etc, call getupper etc which grabs all letters or symbols
function generateX() {
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUppercase());
    }
//so each one grabbed is pushed into the empty array xs
    if (lowerEl.checked) {
        xs.push(getLowercase());
    }

    if (numberEl.checked) {
        xs.push(getNumber());
    }

    if (symbolEl.checked) {
        xs.push(getSymbol());
    }

// if none is checked, return empty
    if (xs.length === 0) return "";

//so random the array values xs
    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', generatePassword);


copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = pwEl.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password copied to clipboard");
});













