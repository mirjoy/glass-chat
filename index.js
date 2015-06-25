var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var redis = require('redis');
var client = redis.createClient();

client.subscribe('channel');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

client.on('message', function(channel, msg) {
  io.emit('message', msg);
});

http.listen(2222, function(){
  console.log('listening on *:2222');
});
