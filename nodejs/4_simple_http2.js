const http = require('http');
const PORT = 2020;


http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/json; charset=utf-8')

    const obj ={
        "이름":"김김"
    }

    res.write(JSON.stringify(obj))
    res.write(JSON.stringify(obj))
    res.end()
}).listen(PORT,()=>{
    console.log(`${PORT} 서버 오픈!`)
})