var http = require('http');

var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = () => {
    http.createServer(function(req, res) {
        res.end('I hear a scream!');
    }).listen(8080);
}

eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');