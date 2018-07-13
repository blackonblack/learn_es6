function sum(value, size=1 ){
    //size =size || 1;
   return value * size
}

console.log(sum(3));
//기본값 설정 하지 않을 시 NaN

function sum1(value, size={value:1}){
    return value*size.value;
}
console.log(sum1(5));