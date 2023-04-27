$(function() {

    $('.slider__items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: document.querySelector('#my-arrow-next'),
        prevArrow: document.querySelector('#my-arrow-prev'),
        responsive: [{
                breakpoint: 1201,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }

            },
            {
                breakpoint: 801,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }

            },

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.header__burger-menu').on('click', function() {
        $('.header__burger-list').slideToggle();
    });



});