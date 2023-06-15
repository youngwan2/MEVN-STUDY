const express = require('express')
const app = express();
const PORT = 3000


// 1번 로직
app.use((req,res,next)=>{
    console.log('1 Time:',Date.now())
    next() // 다음 use에 설정된 미들웨어를 호출한다.
})
app.use((req,res,next)=>{
    console.log('2 Time:',Date.now())
    next()
})

app.get('/',(req,res)=>{
    res.send('환영합니다!')
})


app.listen(PORT,()=>{
    console.log('서버 작동 정상')
})


