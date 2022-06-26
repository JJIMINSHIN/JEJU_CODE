const input = prompt('과목별 점수를 공수를 입력해주세요 20 30 40 ').split(' ');
let sum =0;

for(let i=0; i<3; i++){
    sum += Number(input[i]);
}  
console.log(Math.floor(sum/3));