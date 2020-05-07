/**
 * This file will handle all the requests that need to interact with a socket.
 * Again there is multiple ways you can go about orginizing your project, 
 * I just like to do it similar to what I did with my routes and controllers.
 */

const disconnectSocket = () => {
    console.log("You have been disconnected from the socket!!!");
}


exports.connect = (socket) => {
    console.log("Hello socket world!");

    socket.on('disconnect', disconnectSocket);
}