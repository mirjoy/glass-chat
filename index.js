var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('message', function(channel, msg){
    io.sockets.emit('message', msg);
  });
});

http.listen(2222, function(){
  console.log('listening on *:2222');
});
