/* 주문 받은대로 처리하기 */
// 주문1) ex. 1.7초만에 아메리카노가 나왔다! [1초 ~ 2초]
// 주문2) ex. 3.5초만에 라떼 나왔다.            [2~3.5초]
// 주문3) ex. 4.1초만에 카푸치노 나왔다.           [3~5초]
// 주문4) ex. 2.2초만에 에스프레스 나왔다.      [2~3초]


const a = () => {
    return new Promise((resovle, reject) => {
        let ms = 0;
        const delay = Math.random() * 2000
        if (delay >= 1000 && delay <= 2000) {
            ms = delay
        }
        setTimeout(() => {
            console.log(`${ms / 1000}초 만에 아메리카노가 나왔다`)
            resovle(`${ms / 1000}초 만에 아메리카노가 나왔다`)
        }, ms)
    })
}


const b = () => {
    return new Promise((resovle, reject) => {
        let ms = 0;
        const delay = Math.random() * 3500
        if (delay >= 2000 && delay <= 3500) {
            ms = delay
        }
        setTimeout(() => {
            console.log(`${ms / 1000}초 만에 라떼가 나왔다`)
            resovle(`${ms / 1000}초 만에 라떼가 나왔다`)
        }, ms)
    })
}

const c = () => {
    return new Promise((resovle, reject) => {
        let ms = 0;
        const delay = Math.random() * 5000
        if (delay >= 3000 && delay <= 5000) {
            ms = delay
        }
        setTimeout(() => {
            console.log(`${ms / 1000}초 만에 카푸치노가 나왔다`)
            resovle(`${ms / 1000}초 만에 카푸치노가 나왔다`)
        }, ms)
    })
}


const d = () => {
    return new Promise((resovle, reject) => {
        let ms = 0;
        const delay = Math.random() * 3000
        if (delay >= 2000 && delay <= 3000) {
            ms = delay
        }
        setTimeout(() => {
            console.log(`${ms / 1000}초 만에 에스프레소가 나왔다`)
            resovle(`${ms / 1000}초 만에 에스프레소가 나왔다`)
        }, ms)
    })
}



a().then(ret => b()).then(ret => c()).then(ret => d());

// const delay =Math.floor(Math.random()*2000)

// console.log(delay)