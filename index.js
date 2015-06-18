var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('*', function(channel, msg){
    io.emit(channel, msg);
  });
});

http.listen(2222, function(){
  console.log('listening on *:2222');
});
