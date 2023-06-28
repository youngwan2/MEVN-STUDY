// Promise 는 reject로 예외 처리할 수 있다.
function promErr() {
    return new Promise((resolve, reject)=>{
        reject('Promise의 예외처리 입니다.')
    })
}

// const resultP = promErr().catch((e)=>{
//     console.log(e)
// })


// async 는 throw 로 예외 처리할 수 있다.
async function asyncErr(){
    console.log(new Date().toLocaleString())

    throw 'async의 예외처리 입니다.'
}

const resultA = asyncErr().catch((e)=>{console.log(e)})




try {
    asyncErr()
} catch(e){
    console.log(e)
}