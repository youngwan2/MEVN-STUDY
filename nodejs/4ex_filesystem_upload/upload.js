const express = require('express');
const path = require('path')
const logger = require('morgan');
const multer = require('multer');
const fs = require('fs')
const app = express()
const port = 3005;


/* ===미들웨어 */
const _path = path.join(__dirname, '/')
app.use('/', express.static(_path))
app.use(logger('tiny'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/* === multer) 이미지 업로드 경로 설정 */
const storage = multer.diskStorage({
    // --- 저장된 파일 경로 설정
    destination: function (req, file, cb) {
        cb(null, _path + '/files')
    },

    // --- 파일 이름 설정
    filename: function (req, file, cb) {
        const fix = Buffer.from(file.originalname, 'latin1').toString('utf-8')
        // cb(null, file.fieldname + '-' + Date.now())
        cb(null, fix)
    }
})

const upload = multer({ storage: storage })


/* ===REST */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})


app.post('/upload', upload.single('profile'), (req, res, next) => {
    console.log(req.file)                                  //지정한 html을 한 번 더 불러옴

    fs.stat(_path + '/', (err, stats) => {
        if (err) return res.send(`<script>alert('현재 ${err}가 발생했습니다.')</script>)`)
        console.log(stats.isDirectory())
        if (stats.isDirectory) {
            fs.readdir(_path + '/files', "utf-8", (err, data) => {
                if (err) return console.log(err)
                let list = ``
                data.forEach((file, i) => {
                    list += `<li style="list-style:none"><a style="text-decoration:none" href="/files/${file}">${file}</li>`
                })
                res.send(`<h1 style="text-align:center; background:gold; color:white">파일 목록</h1>
                    <ul>${list}</ul>
                `)
                // res.send(`<script>alert('파일 업로드 완료'); location.replace('index.html')</script>`)
            })
        }
    })
})

// app.post("/mkdir/:mk",(req,res)=>{
//     const mk = req.body.mk
//     console.log(mk)
//     fs.mkdir(_path + mk,{ recursive: true },(err)=>{
//         if(err){console.log(err); return }
//     })
//     res.send(`<script>alert('분류 완료'); location.replace('index.html')</script>`)   
// })

app.get("/mkdir/:mk", (req, res) => {
    const mk = req.query.mk
    fs.mkdir(_path + mk,/*{ recursive: true },*/(err) => {
        if (err) { console.log(err); return }
    })
    res.send(`<script>alert('폴더 생성 완료')</script>`)
})



/* ===포트연결 */
app.listen(port, () => {
    console.log("포트가 열렸습니다!", port)
})