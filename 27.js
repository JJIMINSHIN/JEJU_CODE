let name = prompt('이름을 입력해 주세요(영어)').split(' ');
let score = prompt('점수를 입력해주세요').split(' ');

const obj = {};

for(let i =0; i<name.length; i++){
    obj[name[i]] = parseInt(score[i], 10);
}

console.log(obj)

