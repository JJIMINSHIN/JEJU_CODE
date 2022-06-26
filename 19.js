function pow(num, a, b){
    num = prompt("두 수를 입력해주세요.").split(" ");
    a = Number(num[0]);
    b = Number(num[1]);
    
    console.log(Math.pow(a,b))
}

pow()