


var port = process.env.port || 81;

var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)

app.listen(port);
console.log('socket.io server started on port: ' + port + '\n');

function handler (req, res) {
  res.writeHead(200);
  res.end('socket.io server started on port: ' + port + '\n');
}

io.sockets.on('connection', function (socket) {
  console.log('user connected');

  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('add-message', (message) => {
    io.emit('message', {type:'new-message', text: message});    
  });
});
});


