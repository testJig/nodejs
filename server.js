var express =require('express');
var app = express();

//var server = require('http').createServer(app);
//var io = require('socket.io')(server);
app.set('port', process.env.PORT || 3000);
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
var io = require('socket.io')(server);

var port=process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
console.log('Server Listening at port'+port);

app.get('/',function(req,res){
console.log('hello from server');
 res.render('./public/nilesh.html');
});

//app.listen(port);
console.log('Server Listening at port'+port);