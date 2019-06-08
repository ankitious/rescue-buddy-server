var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const data = [
    {
        "id": 283229,
        "latitude": 18.605289,
        "longitude": 73.719196,
        "name": "Wipro"
    },
    {
        "id": 283124,
        "latitude": 18.605289,
        "longitude": 73.719196,
        "name": "Infosys"
    },
    {
        "id": 283090,
        "latitude": 18.603536,
        "longitude": 73.716578,
        "name": "Embassy Tech Zone Park"
    },
    {
        "id": 283116,
        "latitude": 18.6038817,
        "longitude": 73.7158914,
        "name": "Rockwell Automation"
    },
    {
        "id": 283352,
        "latitude": 29.64592,
        "longitude": -95.238882,
        "name": "Houston"
    },
    {
        "id": 283131,
        "latitude": 29.772341,
        "longitude": -95.181914,
        "name": "Houston"
    },
    {
        "id": 283094,
        "latitude": 30.1244192,
        "longitude": -95.4453383,
        "name": "The Woodlands"
    },
    {
        "id": 283095,
        "latitude": 30.2045668,
        "longitude": -95.4717587,
        "name": "The Woodlands"
    },
    {
        "id": 283324,
        "latitude": 31.0295605,
        "longitude": -97.4795707,
        "name": "Belton"
    },
    {
        "id": 283181,
        "latitude": 37.186521,
        "longitude": -78.201067,
        "name": "Burkeville"
    },
    {
        "id": 283260,
        "latitude": 29.669426,
        "longitude": -95.657712,
        "name": "Sugar land"
    },
    {
        "id": 283221,
        "latitude": 29.685072,
        "longitude": -95.41109,
        "name": "Houston"
    },
    {
        "id": 283235,
        "latitude": 29.045002,
        "longitude": -95.4258323,
        "name": "Lake Jackson"
    },
    {
        "id": 283066,
        "latitude": 29.9084028,
        "longitude": -95.5692759,
        "name": "Houston"
    },
    {
        "id": 283136,
        "latitude": 29.754593,
        "longitude": -95.804927,
        "name": "Katy"
    },
    {
        "id": 282121,
        "latitude": 30.2672,
        "longitude": -97.7431,
        "name": "Austin"
    },
    {
        "id": 283349,
        "latitude": 29.9084913,
        "longitude": -95.5687655,
        "name": "Houston"
    },
    {
        "id": 283325,
        "latitude": 30.945043,
        "longitude": -97.538246,
        "name": "Salado"
    },
    {
        "id": 283321,
        "latitude": 29.0223789,
        "longitude": -95.40083,
        "name": "Clute"
    },
    {
        "id": 283318,
        "latitude": 29.6258979,
        "longitude": -95.5938417,
        "name": "Sugar Land"
    }
];
app.get('/', function(req, res){
    res.send('Yes, Rescue buddy is up!');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.emit('timer', data);
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('send', (d) => {
        console.log(d);
    })
});

const port = process.env.PORT || 3005;
http.listen(port, function(){
    console.log('listening on *:3005');
});
