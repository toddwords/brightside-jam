let express = require('express'); 
let app = express();
let server = app.listen(process.env.PORT || 3000);
app.use(express.static('public'));
console.log('server running')
let socket = require('socket.io');
let io = socket(server, {
  //this allows external websites to connect
  cors: {
    origin: true
  },
  //this allows older socket versions to connect
  allowEIO3: true
});

io.sockets.on('connection', newConnection);

function newConnection(socket){
  
  socket.on("buttonPressed", function(data){
    io.emit("buttonPressed")
  })
  socket.on("airhorn", function(){
    //io.emit = send to everyone
    io.emit("airhorn")
  })
  socket.on("playSound", function(songId){
    io.emit("playSound", songId)
  })
  // socket.on("newMsg", function(data){
  // //send a message to everyone
  //   io.emit("newMsgFromServer", data)
  // //send a message to just the person who sent the original
  //   socket.emit("newMsgFromServer", data)
  // })
  
}