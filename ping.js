/**
 * Created by Aaron on 3/29/2016.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
app.get('/', function(req, res){
    res.sendfile('./ping.html');
});
app.get('/aaron', function(req, res){
    res.sendfile('./pingAaronSide.html');
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
io.on('connection', function(socket){
    socket.on('disconnect', function() {
        console.log('user disconnected');
    });

});

http.listen(3000, function(){
    console.log('listening on *:3000');

});

module.exports = app;