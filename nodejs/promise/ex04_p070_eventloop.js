/* 젤 먼저 실행 */
console.log('Hi')


/* 세, 네 번째로 실행 */
// setTiemout는 비동기적 처리를 위해 백그라운드로 넘어간다(web APIs)
setTimeout(()=>{
    console.log('async 첫번째 완료')
},0)

// 이벤트 루프는 web APIs 에서 실행될 준비가된 함수를 callback que로 옮겨서 대기 시킨다.
setTimeout(()=>{
    console.log('async 첫번째 완료')
},0)

// 이벤트 루프는 모든 비동기적 함수를 처리하기 전에 우선적으로 
// 즉시 호출이 되는 메소드 부터 처리한다.
// 즉, 앞서 setTiemout 보다 아래 console.log() 가 우선 실행된다.
/* 두 번째로 실행 */
console.log('안녕하세요')


// 위 console.log()가 실행되고 나서, 콜 스택에 자리가 비어 있다면
// 콜백 큐에 있는 함수가 이벤트 루프에 의해 호출되어 콜 스택에 쌓이게 된다.
