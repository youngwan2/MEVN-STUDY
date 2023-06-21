const job1 = () => {
    const b = Math.random() * 100 //0.1 초 미만의 속도로 b에 숫자가 담김
    console.time('측정 시작1')
    setTimeout(() => {
        console.log("난 1번")


    }, b)
    console.timeEnd('측정 완료1')
}


const job2 = () => {
    const b = Math.random() * 100 //0.1 초 미만의 속도로 b에 숫자가 담김

    console.time('측정 시작2')
    setTimeout(() => {
        console.log("난 2번")

    }, b)
    console.timeEnd('측정 완료2')
}

const job3 = () => {
    const b = Math.random() * 100 //0.1 초 미만의 속도로 b에 숫자가 담김

    console.time('측정 시작')
    setTimeout(() => {
        console.log("난 3번")


    }, b)
    console.timeEnd('측정 완료3')
}


job1()
job2()
job3()