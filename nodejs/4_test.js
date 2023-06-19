const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000



app.get('/search.naver/:animal',(req,res)=>{
    const equery = req.query.query
    console.log(equery)
    const animal = req.params.animal



    res.send(`당신이 선택한 동물은 <u>${animal}</u> (이)군요!`)
})


app.listen(PORT,()=>{
    console.log("서버오픈",PORT)
})

