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

    // :: Deixar o input Ativo
    const $input = $('.input-newsletter');

    $input.on('focusout', () => {
        if($input.val() != "") {
            $('.input-newsletter').addClass('active');
            $('.btn-newsletter').addClass('active');
        } else {
            $('.input-newsletter').removeClass('active');
            $('.btn-newsletter').removeClass('active');
        }
    });

    // :: AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    $('body').scrollspy({target: ".navbar"})
});