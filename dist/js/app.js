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
        easing: 'ease',
        duration: 1000,
        once: true,
        disable: 'mobile'
    });

    // :: Spy Scroll
    $('body').scrollspy({target: ".navbar"})

    // :: Smooth Scroll
    $('.navbar a').on('click', function(e) {
        if(this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;

            $('html, body').animate(
                {
                    scrollTop: $(hash).offset().top
                }, 800
            );
        }
    });

    $('.modal-button').on('click', function() {
        $('main').css('filter', 'blur(15px)');
    });

    $('.modal').on('click', (e) => {
        if(e.target.id === 'entrar' || e.target.id === 'comeceAgora' || e.target.id === 'modalClose' || e.target.id === 'spanClose' || e.target.id === 'modalPlanos') {
            $('main').css('filter', 'none');
        }
    });

    // :: Change Text Modal
    const modalHeading = $('.modal-plan-heading h5');
    const modalPrice = $('.modal-plan-heading h4');
    const buttonPlans = $('.btn-plans');

    const changeText = (heading, price) => {
        modalHeading.html(heading);
        modalPrice.html(price);
    }

    buttonPlans.on('click', function(e) {
        if(e.target.id === 'planPro') {
            changeText('Professional', 'R$ 149/ Mês');
        } else if(e.target.id === 'planAdv') {
            changeText('Advanced', 'R$ 289/ Mês');
        } else if(e.target.id === 'planEnt') {
            changeText('Enterprise', 'R$ 479/ Mês');
        }
    });
});