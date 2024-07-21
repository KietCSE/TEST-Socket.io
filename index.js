const PORT = 3000;
const http = require('http');
const {Server} = require('socket.io')


const httpsServer = http.createServer((req, res) => {
    res.statusCode = 200; // Set the status code to 200 (OK).
    res.setHeader('Content-Type', 'text/plain'); // Set the response header to plain text.
});

const io = new Server(httpsServer, {
    cors: {
        origin: "*", // Allow all origins (configure as needed)
        methods: ["GET", "POST"]
    }
});


io.on("connection", (socket) => {
    console.log(socket.id)
});

httpsServer.listen(3000);
