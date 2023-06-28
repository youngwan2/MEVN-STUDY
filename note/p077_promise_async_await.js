



const a = () => {
    /* 안 줄여쓰면 */
    // let forPromise = new Promise((resolve,reject)=>{
    // })

    // return forPromise

    /* 위에 코드를 줄여 쓰면... */
    return new Promise((resolve, reject) => {
        const delay = Math.random() *100
        setTimeout(() => {
            console.log("a_con:",1)
            resolve(1)
        }, delay)
        // reject("실패!!")
    })
}

const b = () => {
    /* 안 줄여쓰면 */
    // let forPromise = new Promise((resolve,reject)=>{
    // })

    // return forPromise

    /* 위에 코드를 줄여 쓰면... */
    return new Promise((resolve, reject) => {
        const delay = Math.random() *100
        setTimeout(() => {
            console.log("b_con:",2)
            resolve(2)
        }, delay)
        // reject("실패!!")
    })
}


const c = () => {
    /* 안 줄여쓰면 */
    // let forPromise = new Promise((resolve,reject)=>{
    // })

    // return forPromise

    /* 위에 코드를 줄여 쓰면... */
    return new Promise((resolve, reject) => {
        const delay = Math.random() *100
        setTimeout(() => {
            console.log("c_con:",3)
            resolve(3)
        }, delay)
        // reject("실패!!")
    })
}


const aa = async function(){
    await a()
    await b()
    await c()
}

aa()


const main = async() =>{
    await b()
    await a()
    await c()
}


main()