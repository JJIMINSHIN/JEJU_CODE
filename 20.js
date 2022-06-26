function cal(num, a, b){
    num = prompt('').split(' ');
    a = Number(num[0]);
    b = Number(num[1]);

    let mok = Math.floor(a/b);
    let left = a%b;

    console.log(`목은 ${mok}이고 나머지는 ${left}이다.`);

}

cal()