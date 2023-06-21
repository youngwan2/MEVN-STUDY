const a =[1,2,3,4,5]

console.log(a.includes(3))


const filter = a.filter((el,i)=>{
    return el === 3 || el ===2
})

console.log(filter)



// indexOf 보단 findexIndex 가 성능이 더 좋다.
const ret = a.indexOf(3)
console.log(ret)
const ret2 = a.findIndex(e=> e===3)
console.log(ret2)