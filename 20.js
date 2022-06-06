const n =prompt(" 두 수를 입력해 주세요.").split(" ");
let a = parseInt(n[0], 10);
let b = parseInt(n[1], 10);
let mok = math.floor(a/b);
let left = a%b;

console.log(mok+" "+ left)
