/* 일반적인 에러 catch */
function testError() {
    console.log('에러 던지기를 시작합니다.')
    throw new Error('testError에서 에러를 고의 발생 시켰습니다.')
}

function main() {
    try {
        console.log('====== try 시작 ======')
        testError();
        console.log('====== try 끝 ======')
    } catch (error) {

        console.log('====== catch 시작 ======')
        console.log(error)
        console.log('====== catch 끝 ======')
    } finally {
        console.log('====== finally 시작 ======')
        console.log('====== finally 끝 ======')
    }
}


main()