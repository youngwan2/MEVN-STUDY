/* async 에서 발생한 reject를 catch가 놓친 상황 */
async function testError() {
    console.log('에러 던지기를 시작합니다.');
    throw new Promise((resolve, reject) => {
        // resolve(Error('testError을 고의적으로 발생'));
        reject(console.log('제가 표시한 에러임'));
    });
}

function main() {
    try {
        console.log('====== try 시작 ======');
        testError();
        console.log('====== try 끝 ======');
    } catch (error) {
        console.log('====== catch 시작 ======');
        console.log(error);
        console.log('====== catch 끝 ======');
    } finally {
        console.log('====== finally 시작 ======');
        console.log('에러 테스트를 종료합니다.');
        console.log('====== finally 끝 ======');
    }
}

main();
