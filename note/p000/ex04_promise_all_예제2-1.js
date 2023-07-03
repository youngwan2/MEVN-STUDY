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

  await test('시작', 1000);
  /* 모든 프로미스가 반환될 때 까지 기다린 후 처리 */
  /* 즉, 서로 처리되는 시간이 다르지만, 오래걸리는 프로미스 까지 모두 기다린 후 처리 */
  await Promise.all([
    test('코딩', 3000),
    test('Coding', 2000),
    test('Coding2', 5000),
    test('Coding2', 1500),
  ]);

  console.timeEnd('일반 비동기 처리');
};
testGo();
