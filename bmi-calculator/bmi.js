// in query selector we always uses css selector
// A CSS selector is a pattern used to select HTML elements.

// Think of it as an address that tells the browser:

// "Find this element."
const form = document.querySelector('form');
form.addEventListener('submit' , function(e){
   e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')
  console.log(result)
  if(  height <= 0 || isNaN(height) )
  {
    result.innerHTML =`please enter a correct value ${height} is invalid`
    return;
  }
  else if( weight <=0 || isNaN(weight) )
  {
    result.innerHTML = `please enter a correct value ${weight} is invalid`
    return;
  }
  const bmi = weight / ((height / 100) ** 2)
  let message = `your bmi is ${bmi.toFixed(2)} <br> you are in `

  if(bmi<18.6)
  {
   message+= `<span style = "color:blue"  ; >underweight</span>`
  }
  else if(bmi>18.6 && bmi <24.9)
  {
    message+= `<span style = "color:green"  ; >normal</span>`
     
  }
  else if(bmi>24.9)
  {
    message+= `<span style = "color:red"  ; >overweight</span>`
  }
  result.innerHTML =  `${message}`


})
