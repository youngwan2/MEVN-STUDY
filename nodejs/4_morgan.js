const express = require('express')
const app = express();
const loogger =require('morgan')

const PORT = 3000;

// 1번 로직

app.use(loogger('tiny'))
app.use((req,res,next)=>{
    console.log('1 Time:',Date.now())
    next()// 다음 미들웨어를 호출한다.
})

app.use((req,res,next)=>{
    console.log('2 Time:', Date.now())
    next()
})

app.get('/',(req,res)=>{
    res.send('환영합니다!')
})

app.listen(PORT,()=>{
    console.log(`서버 생성 완료!`)
})

/* 
서버 생성 완료!
1 Time: 1686796691744
2 Time: 1686796691746
GET / 200 16 - 8.467 ms
*/