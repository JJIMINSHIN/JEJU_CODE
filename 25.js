function circle(r){
    let r = r * r * 3.14;
    return r;
}

const input =prompt('반지름의 길이를 입력해주세요.');
console.log(circle(input))