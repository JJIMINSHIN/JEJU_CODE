const n = prompt('문자를 입력해주세요.');
let result = '';

for (let x in n){
    if(n[x].toUpperCase() === n[x]){
        console.log(n[x])
        result += n[x].toLowerCase()
    }else{
        result += n[x].toUpperCase()
    }
}

console.log(result);
