//bullet.js

$(document).ready(function () {

    //초기설정
    $('.box').hide();
    $('.box').slice(0, 6).show();

    $('#loadMore').on('click', function (evt) {

        evt.preventDefault();

        var hiddenBox = $('.box:hidden').length;
        console.log('숨겨진 box갯수: ' + hiddenBox); //12

        if (hiddenBox === 0) {
            alert('마지막 페이지입니다.');
            return;
        }

        //숨겨진 박스 등장
        $('.box:hidden').slice(0, 6).slideDown();

        //스크롤 애니메이션
        var offTop = $(this).offset().top;
        console.log('#loadMore버튼이 문서로부터 떨어진 거리: ' + offTop);

        $('html, body').animate({
            scrollTop: offTop
        }, 1500);

    });

    $('.totop > a').on('click', function (e) {

        e.preventDefault();

        $('html,body').animate({
            scrollTop: 0
        }, 800);
    });

});