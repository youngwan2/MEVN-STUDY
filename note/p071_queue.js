class Queue {
    constructor() {
        this.a = [] // 큐 변수
    }
    front() {
        // 배열 a 가 비어있으면 
        if (this.a.length === 0) {
            console.log('큐가 비었습니다.')
            return 
            // 안 비었으면 0 번째 요소 반환
        } else return this.a[0]
    }
    // 배열에 value 을 push(배열의 젤 뒤에 넣는 연산) 한다.
    enqueue(value) {
        this.a.push(value)
    }

    // 배열에서 요소가 존재하면 요소를 꺼내고, 없으면 바로 종료
    dequeue() {
        if (this.a.length === 0) {
            console.log("큐가 비었다.")
            return
        }
        // shift 메서드는 배열의 앞에 있는 요소를 꺼내는 연산을 수행
        this.a.shift();
    }
}

const q = new Queue()

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)

for (let i = 0; i < 5; i++) {
    console.log(q.front()) // 배열 0번째 요소 출력하고,
    q.dequeue() // 배열의 젤 앞 요소 제거하고
}


/*---  배열 메소드 참고하면 좋을 것 정리 --- */
const arr = [1, 2, 3, 4, 5]
// shift 는 배열의 요소를 앞에서 부터 꺼내는 역할
// unshift 는 배열에 요소를 앞에서 부터 추가하는 역할
arr.shift()

// pop 는 배열의 요소를 뒤에서 부터 꺼내는 역할
// push 는 배열의 뒤쪽으로 요소를 추가하는 역할
arr.pop()
console.log(arr)