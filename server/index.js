const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = socketio(server);
const socket = require('./socket/index');

io.on('connection', socket.connect);


/**
 * I like to separate my routes and controllers. In order to do this, I put
 * the routes in a folder called routes and call them here. This is just 
 * a preference. There is other ways to do this.
 */
app.use('/api/v1', require('./routes/chat'));

server.listen(PORT, () => {
    console.log(chalk.green(`Port is listening on port ${PORT}`));
});