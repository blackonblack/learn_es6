// setTimeout(function(){
//     console.log("settimeout");
// }, 1000);
setTimeout(()=>{
    console.log("settimeout");
}, 1000);
//반환값이 없음

// let newArr = [1,2,3,4,5].map(function(value, index,object){
//     return value*2;
// })
// let newArr = [1,2,3,4,5].map((v)=>{
//     return v*2;
// })
//let newArr = [1,2,3,4,5].map( v => v*2 );
let newArr = [1,2,3,4,5].map( (v) => ( v*2 ) );

console.log(newArr);