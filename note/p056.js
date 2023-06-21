const numbers =[1,3,5,4]

// every 메소드는 모든 요소들이 조건에  참이어야 하며 하나라도 거짓이면 false을 반환
const isAllOdd = numbers.every(e=>e%2)

// some 메소드는 요소들 중 하나라도 조건에 참이라면 true를 반환한다.
const isSomeOdd = numbers.some(e=>e%2)

console.log(isAllOdd, isSomeOdd)