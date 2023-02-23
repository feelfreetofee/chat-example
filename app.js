var app = require('express')()

var io = require("socket.io")(app.listen(5000))

app.get('/', (req, res) => {
	res.sendFile(__dirname  + '/index.html')
})

io.on('connection', (socket) => {
    socket.on('send_message', data => {
        io.sockets.emit('recieve_message', data.message);
    })
})