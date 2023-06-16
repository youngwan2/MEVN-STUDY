const express = require('express')
// const path =require('path')
const logger = require('morgan')
const app = express();

const PORT = 3000;

const _path = __dirname + '/4ex_dist'
console.log(_path)

app.use('/', express.static(_path))
app.use(logger('combined'))

// done 경로로 요청이 오면 로그인 정보를 처리하는 라우터
app.get('/done', (req, res) => {
    console.log(req.body)

    // const [name,age,gender,content,date] = req.query
    console.log(req.query)
    const name = req.query.username;
    const age = req.query.age;
    const gender = req.query.gender;
    const content = req.query.content;
    const date = req.query.date;

    console.log("이름:", name, "나이:", age, "성별:", gender, "내용:", content, "날짜:", date)

    // res.sendFile(__dirname +'/4ex_dist/done.html')
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="./favicon.ico">
        <link rel="shortcut icon" href="./favicon.ico">
        <title>YW Home</title>
            <style>

            html{
                background: linear-gradient(30deg, teal, black);
              }
    
                body{
                    background-color:brown ;
                    color:white;
                    min-height: 100vh;
                    height: 100%;
                    box-shadow: 2px 2px 5px black;
                    animation: app 1s 1 ease-in-out;
                }
          
                @keyframes app {
                  from {transform: translateY(-20px) ;opacity: 0;}
                }

                h1{
                    text-align: center;
                    padding: 10px;
                    background:black;
                    color:white;
                    box-shadow:2px 8px 5px 1px rgba(9,9,9,0.6);
                    text-shadow:2px 2px 5px white;
                    transition:0.5s;
                }

                h1:hover{
                    text-shadow:1px 1px 3px gold
                }

                hr{
                    backgorund:black;
                    display:inline-block
                }
    
                h2{
                    text-align: center;
                    -webkit-box-shadow: 8px 0px 0px 0px #DCD0C0, 0px 8px 0px 0px #B1938B, -8px 0px 0px 0px #4E4E56, 0px 0px 0px 8px #DA635D, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: 8px 0px 0px 0px #DCD0C0, 0px 8px 0px 0px #B1938B, -8px 0px 0px 0px #4E4E56, 0px 0px 0px 8px #DA635D, 5px 5px 15px 5px rgba(0,0,0,0);
                    border: 1px solid black;
                    background-color: rgba(0, 0, 0, 0.448);
                    padding: 30px;
                    border: none;
                    width: 300px;
                    position: fixed;
                    left: 50%;
                    bottom:50px;
                    z-index:100;
                    transform: translate(-50%);
                    animation: img 1s 1 ease-in-out;
                }
          
                @keyframes img {
                  from {transform: translate(-50%) translateY(80px) ;opacity: 0;}
                }
                a{
                    background-color: rgba(100, 98, 98, 0.64);
                    color:black;
                    position: fixed;
                    color: white;
                    left: 50%; 
                    bottom: 20px;
                    transform: translate(-50%);
                    display: inline-block;
                    text-decoration: none;
                    text-align: center;
                    padding: 5px;
                    border-radius: 5px;
                    animation: img 1s 1 ease-in-out;
                }
          
                @keyframes img {
                  from {transform: translate(-50%) translateY(80px) ;opacity: 0;}
                }
                a:hover{
                    background-color: black;
                    color:white
                }

                .images{
                    display:flex;
                    margin-top:1rem;
                    flex-wrap:wrap;
                    justify-content : center;
            
                }

                img{
                    margin:15px;
                    max-width: 100px;
                    min-width: 30%;
                    position: relative;
                    transition:0.5s
                  
                    -webkit-box-shadow: 0px 20px 0px -10px #FFFFFF, 0px -20px 0px -10px #FFFFFF, 20px 0px 0px -10px #FFFFFF, -20px 0px 0px -10px #FFFFFF, 0px 0px 0px 10px #FF0000, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: 0px 20px 0px -10px #FFFFFF, 0px -20px 0px -10px #FFFFFF, 20px 0px 0px -10px #FFFFFF, -20px 0px 0px -10px #FFFFFF, 0px 0px 0px 10px #FF0000, 5px 5px 15px 5px rgba(0,0,0,0);
                    max-height: 300px;
                    min-height: 300px;
                }

                img:hover{
                    transform:scale(1.03)
                }

                #modal{
                    opacity:1;
                    animation:1s appear 1 ease;
                    border:1px solid reb(9,9,9,0.6);
                    transition:1s;
                    width:350px;
                    height:200px;
                    background:rgba(2,2,1,0.6);
                    color:white;
                    position:fixed;
                    left:50%;
                    top:50%;
                    -webkit-box-shadow: 10px 0 0 #F0F0F0, 20px 0 0 #000, 30px 0 0 #F0F0F0, 0 10px 0 #F0F0F0, 10px 10px 0 #000, 20px 10px 0 #F0F0F0, 30px 10px 0 #000, 0 20px 0 #000, 10px 20px 0 #F0F0F0, 20px 20px 0 #000, 30px 20px 0 #F0F0F0, 0 30px 0 #F0F0F0, 10px 30px 0 #000, 20px 30px 0 #F0F0F0, 30px 30px 0 #000, 5px 5px 15px 5px rgba(0,0,0,0); 
                    box-shadow: 10px 0 0 #F0F0F0, 20px 0 0 #000, 30px 0 0 #F0F0F0, 0 10px 0 #F0F0F0, 10px 10px 0 #000, 20px 10px 0 #F0F0F0, 30px 10px 0 #000, 0 20px 0 #000, 10px 20px 0 #F0F0F0, 20px 20px 0 #000, 30px 20px 0 #F0F0F0, 0 30px 0 #F0F0F0, 10px 30px 0 #000, 20px 30px 0 #F0F0F0, 30px 30px 0 #000, 5px 5px 15px 5px rgba(0,0,0,0);
                    transform:translate(-50%,-50%);
                    border-radius:5px;
                }

                #modal.off{
                    visibility: hidden; opacity: 0;
                }

                @keyframes appear {
                    from { opacity:0; transform:scale(0.3)}
                }

                p{
                    margin-top:2.2rem;
                    font-weight:400;
                    padding:10px;
                    font-size:1.15rem;
                    text-align:center
                }

                .close_btn{
                    background:black;
                    color:white;
                }

                .close_btn:hover{
                    background:gold;
                    cursor: pointer;
                    color:black;
                }
            </style>
        
    </head>
    <body>
        <h1>KYW SERVER</h1>
        <h2>FOX 갤러리</h2>
        <div class="images"> 
            <img src="http://tfjs.site:7904/fox2.jpg" alt="fox">
            <img src="http://tfjs.site:7904/fox.jpg" alt="fox">
            <img src="http://tfjs.site:7904/fox3.jpg" alt="fox">
            <img src="http://tfjs.site:7904/fox4.jpg" alt="fox">
            <img src="http://tfjs.site:7904/fox5.jpg" alt="fox">
            <img src="http://tfjs.site:7904/fox_logo.jpg" alt="fox">
        </div>

        <div id="modal">
        <button class="close_btn">X</button>
           <p>안녕하세요! <mark style="border-radius:5px; background:gold; color:black;"> ${name}</mark>님 현재 접속하신 날짜는 ${new Date().toLocaleString()}</p>
              
           </div>
    
        <a href="./index.html">홈으로 이동하기</a>
    </body>
    <script>
        const modal =document.querySelector('#modal');

                modal.addEventListener('click',()=>{
                    modal.classList.toggle('off')
                })
           

        </script>
    </html>`)
})

app.listen(PORT, () => {
    console.log(`너의 서버는? ${PORT}!`)
})

