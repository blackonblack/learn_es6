function checkNum(...argArray){
    //rest parameter로 매개변수앞에 ...을 넣으면 배열로 받는다 
    // const argArray = Array.prototype.slice.call(arguments);
    console.log(argArray)
    console.log(toString.call(argArray))
    argArray.every((v) => typeof v === "number")
}

const result = checkNum(10,2,3,"55");