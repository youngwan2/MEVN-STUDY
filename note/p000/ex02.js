// 1 부터 20까지의 수를 차례로 배열에 담으시오.

// const arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const arr = []
const arr2 = []

let sum = 0

for (let i = 0; i < 20; i++) {
    arr.push(i + 1)
    sum += arr[i]
}

console.log(sum)



const reduce = arr.reduce((prev, curr, i, arr) => {
    prev += curr
    return prev
})

console.log(reduce)

let arr3 = []

const result = Array(20).fill(0).reduce((prev, curr, index, arr) => {
    arr3[index] = index + 1
    prev += arr3[index]

    return prev
}, 0)

console.log(result)
