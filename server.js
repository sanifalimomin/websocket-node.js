var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var msg;
app.get('/', function (req, res) {
    console.log("get req");
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    socket.on('data2', function (data) {
        msg=data.message;
        console.log('Client message: ', msg);
    });
    console.log('Client message: ', msg);
    socket.emit('data', { message: msg });
    
});

server.listen(8080, function () {
    console.log('Listening on *:8080');
});