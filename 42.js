/* 
1. 일단 일월 받고 요일 array 만들기
2. solution함수 만들기
3. Date함수 1) getFullYear로 2022년의 달력 가져오기 2) 포맷 지정 후 getDay로 현지시간 기준 요일 반환
4. getDay로  현지 시간 기준 요일 반환
*/


const month = prompt("월을 입력하세요.");
const date = prompt("요일을 입력하세요.");
const day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function solution(a, b){
    let newYear = new Date().getFullYear();
    let newDay = new Date(`${newYear}-${a}-${b}`).getDay();
    
    return day[newDay];
}

solution(month, date);



