const { Server } = require('socket.io');
const express = require('express')
const path = require('path')
const logger = require('morgan');
const http = require('http');
const app = express();


const server = http.createServer(app)
const io = new Server(server)

const port = 3000;
const _path = path.join(__dirname, '/');

app.use('/', express.static(_path))
app.use(logger('tiny'));

io.on('connection', (socket) => {
    console.log(socket.id)
    // 받을 내용
    socket.on('chat message', (msg) => {
        console.log(msg)
        // 보낼 내용
        io.emit('chat message', msg)

        /* 받은 메시지가 안녕이라면 반갑습니다라고 응답함 */
        if (msg === '안녕') {
            io.emit('chat message', "반갑습니다.")
        }
    })
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

server.listen(port, () => {
    console.log('서버열림:', port)
})