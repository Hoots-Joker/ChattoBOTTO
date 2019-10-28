// App

$(function() {
    'use strict';

    //Pegando a window
    const $window = $(window);

    // :: Rolagem da página:  => Nav
    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.navbar').addClass('scroll');
        } else {
            $('.navbar').removeClass('scroll');
        }
    });
});