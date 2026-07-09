//password must contain numbers bigger characters smaller characters special symbol
const numbers = "1234567890";
const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>/?`~\\\"";
const Smallletters = "abcdefghijklmnopqrstuvwxyz";
const CapitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
function Generater(){
    let randomNumber = function(){
    return numbers[Math.floor(Math.random()*numbers.length)]
}
let randomSpecialChars = function(){
    return specialChars[Math.floor(Math.random()*specialChars.length)]
}
let randomSmallletters = function(){
    return Smallletters[Math.floor(Math.random()*Smallletters.length)]
}
let randomCapitalLetters = function(){
    return CapitalLetters[Math.floor(Math.random()*CapitalLetters.length)]
}
let randomLength = 8+Math.floor((Math.random()*2)) // to make sure it atleast be 8 characters in the password
let randomPassword = ""
let chooseForPassword;
for (let i = 0; i < randomLength; i++) {
    chooseForPassword = [randomCapitalLetters(),randomSmallletters(),randomSpecialChars(),randomNumber()]
    let passwordTaken = chooseForPassword[Math.floor(Math.random()*chooseForPassword.length)]
    randomPassword += `${passwordTaken}`
}
return randomPassword;
}
let generateClick = document.querySelector('.generate-password')
let password = document.querySelector('#password')
generateClick.addEventListener('click' , ()=>{
password.value = Generater();
})
let copyPassword = document.querySelector('#copy-password')
copyPassword.addEventListener('click', function(){
    //oh writetext is a method that why assigning dont worked
    // Learned that writeText() returns a Promise.
    // .then() runs when copying succeeds.
    // .catch() runs if copying fails.
    if(password.value === ""){
        alert("cannot copy empty please generate the password")
        return;
    }
    else{
    navigator.clipboard.writeText(password.value)
    .then(()=>{
        alert("password is copied")
        
    })
    .catch(()=>{
        alert(`copy failed please try again`)
    })
}  
})