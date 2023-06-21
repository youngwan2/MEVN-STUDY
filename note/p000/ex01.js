const arr = Array(100).fill(0).reduce((초기값, 현재값, 인덱스, 배열) => {
    배열[인덱스] = 인덱스 * 2 + 1
    return 배열
},0)

console.log(arr)


const arr2 = [1,2,3,4,5];


const filter = arr2.reduce((prev,curr,i,a)=>{
    
    console.log(prev) 
},0)

console.log(filter)