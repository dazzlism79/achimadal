
//new-detail.js

$(document).ready(function () {

    var liW = $('.slider .item').width();

    // 마지막 아이템을 맨 앞으로 보내고 컨테이너를 한 칸 밀어둠
    $('.slider .item').last().prependTo('.slider .container');
    $('.slider .container').css('margin-left', -liW);

    //오른쪽 버튼 (다음 이미지)
    $('#right').click(function () {
        // 애니메이션 중일 때는 클릭 무시 (연속 클릭 방지)
        $('.slider .container:not(:animated)').animate({
            marginLeft: '-=' + liW
        }, 800, function () {
            // 이동 후: 첫 번째 아이템을 끝으로 보내고 위치 리셋
            $(this).append($('.slider .item').first());
            $(this).css('margin-left', -liW);
        });
    });

    //왼쪽 버튼 (이전 이미지)
    $('#left').click(function () {
        // 애니메이션 중일 때는 클릭 무시
        $('.slider .container:not(:animated)').animate({
            marginLeft: '+=' + liW
        }, 800, function () {
            // 이동 후: 마지막 아이템을 앞으로 보내고 위치 리셋
            $(this).prepend($('.slider .item').last());
            $(this).css('margin-left', -liW);
        });
    });
});