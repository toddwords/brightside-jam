// uncomment the line below and put your socket events in here
let socket = io()

document.body.addEventListener("keypress", function(e){
  if(e.key == "a"){
    socket.emit("airhorn")
  }
})
function sendSoundMessage(soundId){
  socket.emit("playSound", soundId)
  console.log(soundId)
}
function buttonPressed(){
  socket.emit("buttonPressed")
  //
}

//example event listener
socket.on('buttonPressed', function(data){
	  document.body.insertAdjacentHTML("afterbegin", `<marquee>button has been pressed</marquee>`)
    document.body.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
})

socket.on("airhorn", function(data){
    document.querySelector('#airhorn').currentTime = 0
    document.querySelector('#airhorn').play()
})

socket.on("playSound", function(songId){
  
  if(songId !== "music") document.querySelector("#"+songId).currentTime = 0
  document.querySelector("#"+songId).play()
})