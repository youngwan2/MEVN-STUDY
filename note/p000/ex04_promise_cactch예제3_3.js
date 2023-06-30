/* Promise 에서 발생한 reject를 catch 하기 */
function testError() {
  console.log('에러 던지기를 시작합니다.');
  return new Promise((resolve, reject) => {
    // resolve(Error('testError을 고의적으로 발생'));
    reject(new Error('제가 표시한 에러임'));
  });
}

function main() {
  testError()
    .catch((error) => {
      console.log('====== catch 시작 ======');
      console.log(error);
      console.log('====== catch 끝 ======');
    })
    .then((result) => {
      console.log('then 시작');
      console.log('then 에러 테스트 종료',result);
      console.log('then 끝');
    });
}

main();
