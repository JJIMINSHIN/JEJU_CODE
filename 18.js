const input = prompt('과목별 점수를 공수를 입력해주세요 20 30 40 ').split('');
let sum =0;

for(let i=0; i<3; i++){
    sum += parseInt(input, 10);
}  
console.log(math.floor(sum/3));