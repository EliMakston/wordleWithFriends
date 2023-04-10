const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
});

server.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}`);
});

io.on('connection', (socket) => {
    console.log('A new user connected...');
    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});