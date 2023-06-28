const pm = new Promise((resolve, reject) => {
    console.log("Website first Loading...")
    const what = Math.random() < 0.5
    setTimeout(() => {
        // what 이 0.5 미만이라면 참 0.5  이상이라면 에러 발생 후 던짐
        if(what){
            resolve("정상 연결 완료")
        } else {
            reject(new Error('연결 문제가 생겼음, 통신이상'))
        }
     
    }, 2000)
})

pm.then((result)=>{console.log(result)})
.catch(console.error)
.finally(()=>{
    console.log("통신이 종료됨") // 아무 인자도 받지 않음
})
