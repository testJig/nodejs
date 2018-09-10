var express =require('express');
var app = express();
var port=process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
console.log('Server Listening at port'+port);

app.get('/',function(req,res){
console.log('hello from server');
 res.render('./public/nilesh.html');
});

app.listen(port);
console.log('Server Listening at port'+port);