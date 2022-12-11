var lamp = window.document.getElementById('lampStatus')

function isBroken(){
  return lamp.src.indexOf('broken') >-1
}
function turnOn(){
  if (!isBroken()){
    lamp.src = '/assets/images/turn-on.png'
  }
}
function turnOff(){
  if (!isBroken()){
    lamp.src = '/assets/images/turn-off.png'
  }
}
lamp.addEventListener ('click', broken)

function broken(){
  lamp.src = '/assets/images/broken.png'
}