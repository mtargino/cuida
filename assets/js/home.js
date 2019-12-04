
$(window).scroll(function () {
    var oneTop = $('#start').offset().top,
        oneHeight = $('#start').outerHeight(),

        twoTop = $('#form').offset().top,
        twoHeight = $('#form').outerHeight(),

        threeTop = $('#about').offset().top,
        threeHeight = $('#about').outerHeight(),

        fourTop = $('#land').offset().top,
        fourHeight = $('#land').outerHeight(),

        wH = $(window).height(),
        wS = $(this).scrollTop();

    if (wS < oneTop + oneHeight / 2) {
        $('#arrow-00').removeClass("turn-up");
        $('#arrow-01').addClass("turn-down");
        $('#arrow-02').addClass("turn-down");
        $('#arrow-03').addClass("turn-down");
    }
    else if (wS < twoTop + twoHeight / 2) {
        $('#arrow-00').addClass("turn-up");
        $('#arrow-01').removeClass("turn-down");
        $('#arrow-01').removeClass("turn-up");
        $('#arrow-02').addClass("turn-down");
        $('#arrow-03').addClass("turn-down");
    }
    else if (wS < threeTop + threeHeight / 2) {
        $('#arrow-00').addClass("turn-up");
        $('#arrow-01').addClass("turn-up");
        $('#arrow-02').removeClass("turn-down");
        $('#arrow-02').removeClass("turn-up");
        $('#arrow-03').addClass("turn-down");
    }
    else if (wS < fourTop + fourHeight / 2) {
        $('#arrow-00').addClass("turn-up");
        $('#arrow-01').addClass("turn-up");
        $('#arrow-02').addClass("turn-up");
        $('#arrow-03').removeClass("turn-down");
        $('#arrow-03').removeClass("turn-up");
    }
});
var close = 0;

function show() {
    $('.menu').addClass("menu--in");
    $('.please').addClass("please__close");
    $('.please__icon').addClass("ion-md-close");
    $('.please__icon').removeClass("ion-md-menu");
    $('body').css("overflow", "hidden");
    $('.please__grow').text("Fechar");
    $('.please__icon').css("transform", "rotate(90deg)");
    close = 1;
}

function hide() {
    $('.menu').removeClass("menu--in");
    $('.please').removeClass("please__close");
    $('.please__icon').addClass("ion-md-menu");
    $('.please__icon').removeClass("ion-md-close");
    $('body').css("overflow", "auto");
    $('.please__grow').text("Menu");
    $('.please__icon').css("transform", "rotate(0deg)");
    close = 0;
}

function please() {

    if (close == 0) {
        show();
    }
    else {
        hide();
    }
    $('.menu__list__item__anchor').click(function (e) {
        hide();
    });
}