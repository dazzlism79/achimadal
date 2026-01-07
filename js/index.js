//index.js


var autocall;
var moveNum = 0;
var targetUp;
var targetDown;

$(document).ready(function () {
    targetUp = $('.con1, .con5');
    targetDown = $('.con3, .con7');

    autocall = setInterval(flow, 25);

    $(targetUp).add(targetDown).hover(function () {
        clearInterval(autocall);
    }, function () {
        autocall = setInterval(flow, 25);
    });
});

function flow() {
    moveNum++;

    var boxHeight = 340;

    if (moveNum >= boxHeight) {

        moveNum = 0;
        
        targetUp.css('top', 0); // 위치 리셋
        targetUp.each(function () {

            var ul = $(this).find('ul');

            var firstLi = ul.find('.content').first();
            ul.append(firstLi);
        });

        targetDown.css('top', -boxHeight + 'px');
        targetDown.each(function () {
            var ul = $(this).find('ul');
            var lastLi = ul.find('.content').last();
            ul.prepend(lastLi);
        });

    } else {
        targetUp.css('top', -moveNum + 'px');
        targetDown.css('top', (moveNum - boxHeight) + 'px');
    }
}