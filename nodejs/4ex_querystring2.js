const express = require('express')
const app = express();
const port = 3000


// app.get('/:name/body/:age',(req,res)=>{

//     console.log(req.params)
//     const userName = req.params.name
//     const userAge = req.params.age
//     console.log(req.query)
    
//     res.send(`안녕하세요! ${userName}님!`)
// })

app.get('/user/:name/:age',(req,res)=>{
    console.log(req.query)
    const userName = req.params.name;
    const userAge = req.params.age;
    
    res.send(`<h1 style="background:black; box-shadow:10px 10px 5px 1px gray; color:white; padding:10px; text-align:center">환영합니다. <mark style="border-radius:5px"> ${userName}</mark>님</h1>
    <div style="width:100%; height:100vh; background:tomato;">
        <p style="
        position:absolute; 
        left:50%; 
        top:50%; 
        transform:translate(-50%,-50%); 
        font-size:2rem;
        padding:10px;
        background:rgb(999,999,999,0.3);
        box-shadow:10px 10px 5px black;
        ">여기는 바디 영역</p>
    </div>`)
})

app.get('/user/:name/:gender/:age/:address',(req,res)=>{
    console.log(req.params)
    const userName = req.params.name;
    const userAge = req.params.age;

    res.send(`<a href="http://localhost:3000/user/${userName}/${userAge}">개인페이지</a>`)
})
// https://expressjs.com/ko/starter/hello-world.html


app.listen(port,()=>{
    console.log(port,' 열림')
})
