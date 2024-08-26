const {Server} = require("socket.io");
const http = require("http");
const app = require("express")();


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173"],
      methods: ["GET", "POST"],
    },
  });

const userIdSocketMap = {};

const getReceiverId = (receiverId) => userIdSocketMap[receiverId];

io.on("connection", (socket) => {
    console.log("User connected " + socket.id );
     const UserId = socket.handshake.query.userId;

     if (UserId && UserId !== "undefined") {
      userIdSocketMap[UserId] = socket.id;
     }
     io.emit("getOnlineUsers", Object.keys(userIdSocketMap));

    socket.on("disconnect", () =>{
    console.log("User disconnected " + socket.id );
    delete userIdSocketMap[UserId];
    io.emit("getOnlineUsers", Object.keys(userIdSocketMap));
})

})


  module.exports = {app, server, io, getReceiverId}