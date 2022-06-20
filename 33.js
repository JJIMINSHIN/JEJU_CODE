//for문 사용
let number = prompt('값을 입력해주세요').split(' ').join(' ')
let reverse = [];
for(let i =number.length-1; i >=0; i--){
    reverse.push(number[i]);
}
console.log(reverse);

//reverse 사용
let number = prompt('값을 입력해주세요').split(' ').reverse().join(' ');
console.log(number);