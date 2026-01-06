
//header.js

$(document).ready(function () {
    // 1. 초기 상태: 메뉴 숨기기
    $('.menu ul').hide();

    // 2. 이벤트 등록 (한 번만!)
    $('.menu').on({
        'mouseenter': function () {
            $(this).find('ul').stop().slideDown(600); 
        },
        'mouseleave': function () {
            $(this).find('ul').stop().slideUp(600);
        }
    });
});