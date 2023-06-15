
const http = require('http') // http 객체를 가져온다.

const PORT = 5252;

// createServer : http 객체 내에 있는 메소드로 서버를 생성하는 역할을 담당
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    res.write('<h1 style="color:red">1</h1>')
    res.write('<h1>2</h1>')
    res.write('<h1>3</h1>')
    res.end('안녕 하이')

}).listen(PORT,()=>{
    console.log(`${PORT} 서버 오픈`)
})


