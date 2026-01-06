
//submit.js

//alert();

$(document).ready(function () {
    $('.btn #faq').click(function () {
        $('.guide').fadeOut(800); // 0.8초 동안 서서히 사라짐
        $('.faq').delay(400).fadeIn(800); // 사라진 뒤 서서히 나타남
    });

    $('.btn #info').click(function () {
        $('.faq').fadeOut(800);
        $('.guide').delay(400).fadeIn(800);
    });
});