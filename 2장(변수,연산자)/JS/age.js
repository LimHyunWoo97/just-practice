// 함수 calc() 선언과 구현을 하고있다
function calc(){
    var currentYear = 2022; // 올해년도 를 변수에 저장
    var birthYear = prompt("태어난 년도를 입력하세요.", "YYYY"); //사용자로부터 입력받은 값으로 변수에 저장
    var age = 0; //변수를 초기화
    age = currentYear - birthYear +1; //실제나이를 구하는 코드
    document.querySelector("#result").innerHTML = "당신의 나이는 " + age + " 세 입니다.";
}