const express = require('express')
const app = express();
const http = require('http');
const port = 3000;

// express()를 인자로 받는 서버를 생성한다.
const server = http.createServer(app);

// 소켓 아이오 패키지에서 Server 클래스 가져온다.
const { Server } = require('socket.io')

// Server 클래스를 참조하는 io 객체를 생성한다.
const io = new Server(server);


// 루트 경로로 접속 시 index.html 파일을 보내준다.
app.get('/', (req, res) => {

    res.sendFile(__dirname+'/index.html')
})

// on :소켓으로 들어오는 이벤트를 수신한다.
io.on('connection',(socket) =>{
    // 소켓 연결 상태를 체크한다.
    console.log('수신양호! 연결완료!') 

    socket.on('chat message',(msg)=>{
        console.log("유저가 하는말:",msg)

        io.emit('chat message',msg)
    })

    // socket.on('disconnect',()=>{
    //     console.log('user disconnected')
    // })
})








server.listen(port, () => {
    console.log("포트가 열렸습니다.", port)
});