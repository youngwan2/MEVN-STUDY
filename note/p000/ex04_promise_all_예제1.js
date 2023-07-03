function test(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof text === 'string' ? resolve('String') : reject('파악 안됨');
    }, time);
  });
}

/* 일반 비동기처리 */
const testGo = async () => {
  console.time('일반 비동기 처리');

  test('코딩', 3000);
  test('Coding', 2000);
  test('자바스크립트1', 1000);
  test('자바스크립트2', 1700);
  console.timeEnd('일반 비동기 처리');
};
testGo();