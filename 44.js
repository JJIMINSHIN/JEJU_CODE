function solution(n){
    n = prompt('')
    return n.split('').reduce((acc, cur) => acc+ cur*1, 0);
    }  
solution();