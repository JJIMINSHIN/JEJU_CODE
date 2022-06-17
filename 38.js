const scores = prompt('점수를 입력해주세요').split(' ')
scores.sort((a, b) => {return a -b});

let cnt = 0;
let arr = [];

while(arr.length<3){
    let top_3 = scores.pop();

    if(!arr.includes(top_3)){
        arr.push(top_3);
    }
    cnt ++
}
