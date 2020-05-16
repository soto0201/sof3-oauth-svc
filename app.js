var express = require('express');
var app = express();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});


http.listen(app.get('port'), function(){
    console.log('server listening. Port:' + app.get('port'));
});
