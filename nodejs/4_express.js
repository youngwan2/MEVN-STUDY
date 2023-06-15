const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.send('방문을 환영합니다!!')
})


const PORT = 3000
app.listen(PORT,()=>{
    console.log(`${PORT} 서버 오픈!`)
})