//first thinking of generating a random color
const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i = 0 ; i<6 ; i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color;
}
let colorInterval
document.querySelector('#start').addEventListener('click',function(){
   colorInterval = setInterval(function(){
    document.body.style.backgroundColor=randomColor();
  },1000)
})

document.querySelector('#stop').addEventListener('click',function(){
  clearInterval(colorInterval)
})