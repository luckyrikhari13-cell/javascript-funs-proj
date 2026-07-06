const insert = document.getElementById('insert')

window.addEventListener('keyup',(e)=>{
  insert.innerHTML = `
  <div class = "color">
  <table border="1">
  <tr>
  <th>Key</th>
  <th>Keycode</th>
  <th>code</th>
  </tr>
  <tr>
  <td>${e.key === ''? 'space' : e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
  </tr>
  <tr>
  `
})