var io = require('socket.io')
var socket = io();
socket.on('connection', () =>{
    console.log('a user is connected')
  })

  
module.exports = socket;