const data = [
    {
        name : "coffe",
        order : true,
        items : ["americano", "milk", "green-tea"]
    },
    {
        name : "starbucks",
        order : false,
    }
]
//json으로 응답을 받고, js object로 변환 후 
//어떠한 데이터 처리 조작을 한 후 dom에 추가
//데이터 + HTML문자열이 결합이 필요

//tagged template literals
function fn(tags, name, items){
    console.log(tags);
    if(typeof items === "undefined"){
        items = "주문 가능한 상품이 없습니다";
    }
    return (tags[0] + name + tags[i] + items + tags[2])
}

data.forEach((v) => {
    let template = fn`<div> welcome ${data[0].name} !! </div> <h2>주문</h2><div>${data[1].items}</div>`;
    console.log(template);
}) 
