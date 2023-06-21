const d =() => {return {"name":"최주원", "job":"마케터"}}

const {name} =d()
console.log(name)


const a2 =[1,2]
const [b,c] =a2;

console.log(b,c)


const a3 = {name:"큰톨:",노래:"자취방이좋니?"}
const {name:name2,노래} = a3

console.log(name2,노래)