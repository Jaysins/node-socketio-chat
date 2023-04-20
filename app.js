require("dotenv").config()
require("express-async-errors")

const express = require("express")

const app = express()

const chatRouter = require("./routes/chat")

const http = require('http');

const server = http.createServer(app);

const { Server } = require("socket.io");
const ioServer = new Server(server);


app.use(express.static("./public"))
app.use(express.json())

app.use(`/api/v1/chat`, chatRouter)


app.get("/chat", (req, res) => {
    res.sendFile(__dirname + "/public/chat.html");
})


ioServer.on('connection', (socket) => {
    console.log("connected")
    socket.on("chat message", (msg) => {
        ioServer.emit("chat message", `${socket.handshake.headers.name}: ${msg}`)
    })
    ioServer.emit("chat message",`${socket.handshake.headers.name}: Joined`)
});


const port = process.env.PORT || 3000

const start = async () => {
    server.listen(port)
    console.log(`listening on port ${port}`)
}

start()
