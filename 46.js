let n = '';
for(let i =1; i<=20; i++){
    n +=i
}
console.log(n)
let str = n.toString().split('').reduce(
    (sum, curVal) => sum + Number(curVal),0
)
console.log(str);//102