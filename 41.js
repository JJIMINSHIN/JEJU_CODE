const num = prompt('숫자를 입력하세요.');


function isPrime(num){
    if(num === 1){
        console.log('NO');
       
    }

    for(let i = 2; i<Math.floor(Math.sqrt(num)); i++){
        if( (num % i) ===0){
            console.log('NO');        
        }else{
            console.log('YES')

        }
    }


}

isPrime(num);