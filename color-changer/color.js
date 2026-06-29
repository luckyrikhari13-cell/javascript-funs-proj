const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach( (button)=>{
    console.log(button);
    // every action from the hovering mouse to typing anything in a browser is called as a event to listen the event we use the addEventListnter 
    button.addEventListener('click', function(e){
      console.log(e)
      let target = e.target.id;
      // e.target tells us that where is the event is coming from
      // yellow blue white grey
      switch(target)
      {
        case "yellow" :
          document.body.style.backgroundColor = "yellow"
          break;
        case "blue" :
          document.body.style.backgroundColor = "blue"
          break;
        case "white":
          document.body.style.backgroundColor ="white"             
          break;
        case "grey":
          document.body.style.backgroundColor = "grey"
          break;

      } 

    })
} )