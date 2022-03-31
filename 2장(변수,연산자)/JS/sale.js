function showPrice(){
    // 사용자가 입력한 값을 두개의 변수에 저장
    var oPrice = document.querySelector("#originalPrice").value;
    var rate = document.querySelector("#rate").value;

    if (oPrice > 0 && rate > 0){
        var savePrice = oPrice * (rate/100);
        var resultPrice = oPrice - savePrice;
    }
    document.querySelector("#showResult").innerHTML = "상품의 원래 가격은 " + oPrice + " 원 이고, 할인율은 " + rate + "% 입니다 " + savePrice +" 원을 절약한 " + resultPrice + " 원에 살 수 있습니다";
}