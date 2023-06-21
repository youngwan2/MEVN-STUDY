
function perPromise() {

    new Promise((resolve, reject) => {
        console.log(reject("실패"))
        console.log(resolve("성공"))
    }).then((result) => {
        console.log(result, ":결과")
    }).catch((error) => {
        console.log(error, ":error")
    })
}


const a = (c = '나가자') => {
    /* 안 줄여쓰면 */
    // let forPromise = new Promise((resolve,reject)=>{
    // })

    // return forPromise

    /* 위에 코드를 줄여 쓰면... */
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(c)
        }, 1000)
        // reject("실패!!")
    })
}

a().then((result) => {
    console.log("성공 시 나온다:", result)

    return a("싸우자")
}).then((result)=>{
    console.log(result)

    return a("이기자")
}).then((result)=>{
    console.log(result)
})
