$(document).ready(function(){
    //지구 이미지 웹 요소(노드)를 찾아서 저장
    var $earth = $("#earth");
    //버튼에 이벤트를 등록
    $("#btnStart").click(function(){
        $earth.animate({
            left : "470px"
        }, 5000); // 1000 = 1초
    });
});