const time = document.querySelector('#clock')
// setInterval() is a built-in JavaScript function that repeats a piece of code after a fixed amount of time.
setInterval(function (){
let date = new Date();
// Date is a built in javascript class when you create a object of it , it  contain the current date and current time
time.innerHTML = date.toLocaleTimeString()
},1000)