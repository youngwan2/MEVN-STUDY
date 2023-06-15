const http = require('http');
const PORT =2020

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json ; charset=uft-8')

    const obj ={
        "이름":"김김fdsfdsfsfds"
    }

    res.end(JSON.stringify(obj))
})

// 5초 뒤에 서버가 종료된다 {Z 는 올바른 JSON 형태가 아니기 때문이다.
setTimeout(()=>{
JSON.parse("{Z")
},5000)

server.listen(PORT,()=>{
    console.log(`${PORT} 서버 오픈`)
})