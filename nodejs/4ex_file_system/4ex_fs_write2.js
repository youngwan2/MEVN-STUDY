const express = require('express')
const path = require('path')
const fs = require('fs') // 노드js 내부의 fs 패키지를 가져옴
const morgan = require('morgan') // 로그에 대한 설명을 간략하게 정리해주는 미들웨어
const app = express();



const _path = path.join(__dirname, './')
app.use('/', express.static(_path))
app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.send('홈페이지')
})



app.post('/login', (req, res) => {
    const name = req.body.id;
    // const name = req.query.id;
    const pw = req.body.pw;
    // const pw = req.query.pw;
    const gender = req.body.gender;
    const age = req.body.age
    const date = req.body.date
    console.log(req.body)
    const content = `유저의 아이디는 ${name} 이고,\n유저의 비밀번호는 ${pw} 입니다.\n성별은 ${gender} 이고,\n접속한 날짜는 ${date}(${new Date().toLocaleString()}) 입니다.\n\n`
    fs.writeFile('./loginInfo2.txt', content, (err) => {
        if (err) return res.send(`에러가 발생했습니다.${err}`)
        console.log("정상적으로 해킹되었습니다.")
    })

    function delFile() {
        console.log(1)
    }
    fs.readdir(_path, (err, result) => {
        let list = `<body style="background:black; color:white; background-image:url('./coding.jpg')"><h1 style="text-align:center; padding:5px; background:rgba(9,9,9,0.5);">해킹 파일 목록</h1>`
        result.forEach((li, i) => {
            list += `<p style="background:rgba(9,9,9,0.8); padding:10px; width:200px; margin:1rem auto"><a style="text-decoration:none; color:gold;" href="/${li}">${i + 1}__${li}</a></br>
                <button onclick="location.href='del/${li}'">백업 및 삭제</button></p>`
        })
        list += `
            <div style=" padding:10px; background:rgba(9,9,9,0.6); color:white; width:200px; position:absolute; left:5%; top:30%;">
             <h2 style="text-align:center">타겟 정보</h2>
            <p>아이디 : ${name}</p>
                <p>비밀번호 :${pw}</p>
                <p>성별 : ${gender}</p>
                <p>나이 : ${age}</p>
                <p>접속시간 : ${date}<br>(실제: ${new Date().toLocaleString()})</p>
            </div>
        `
        list += `</body>`
        res.send(list)

        // 해당 경로에 대한 정보(통계)를 제공
        fs.stat(_path, (err, stats) => {
            if (stats.isDirectory()) {
                // console.log(stats)
            }
        })
    })

    // 기존 파일에 텍스트를 추가할 때 사용
    fs.appendFile('loginInfo2.txt', "오 이제 이건 내껀가", 'utf-8', (err) => {
        if (err) throw err;
        console.log('파일에 성공적으로 추가되었다?')
    })
})


app.get('/del/:filename', (req, res) => {
    const targetFile = req.params.filename
    console.log(targetFile)

    fs.unlink(_path + '/' + targetFile, (err) => {
        if (err) throw err;
        console.log("제거되었다.")
    })
    res.sendFile(__dirname + '/index.html');
    /* location.href =document.referrer */
})

const port = 3005;
app.listen(port, () => {
    console.log(`서버가 열렸습니다.(포트: ${port})`)
})

