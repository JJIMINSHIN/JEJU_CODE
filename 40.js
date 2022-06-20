let weights = 0; //총 무게구하는 변수
let cnt = 0; //인원 수 구하는 변수

let limit = prompt('제한 몸무게를 입력해 주세요.'); //제한 몸무게
let friends = prompt('총 인원수를 입력해 주세요.'); // 총 인원 수

for(let i =0; i<friends; i++){
    let weight = prompt('현재 탑승하는 승객의 몸무게를 입력해주세요'); // 현재 탑승하는 사람의 몸무게
    weights += weight;
 if(weights <= limit){
     cnt++;
 }
}
console.log(cnt);