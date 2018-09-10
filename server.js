

var express =require('express');
var app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
var port=process.env.PORT || 3000;

app.get(/^socket.io.js$/, function(req, res) {

  res.setHeader('Access-Control-Allow-Origin', 'TRUE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
  res.sendfile('socket.io.js');
  next();
  
  });


// app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // next();
// });

io.on('connection', (socket) => {
  console.log('user connected');
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
  socket.on('add-message', (message) => {
    io.emit('message', {type:'new-message', text: message});    
  });
});

http.listen(port, () => {
  console.log(http);
});



