const MyObj = {
    runTimeout(){
        setTimeout(()=>{
                //(function(){
            console.log(this === window);   //false
            //아래의 코드 일시 true
            this.printData();  
            //아래의 코드에서는 출력 안됨 (코드를 .bind(this)추가)
        },200);
    },
    printData(){
        console.log("hi code");
    }
}

MyObj.runTimeout();