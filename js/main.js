(function ($) {
    "use strict";
    var wWidth = $(window).width();

    //-------portfolio carousel--------
    var $portfolio_paging_status = $('.portfolio-paging-status');
    var $portfolio_slide_element = $('.portfolio-content-wrapper');

    $portfolio_slide_element.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $portfolio_paging_status.text(i + '/' + slick.slideCount);
    });
    $('.portfolio-content-wrapper').slick({
        slidesToShow: 1,
        autoplay: false,
        slidesToScroll: 1,
        asNavFor: '.portfolio-img',
        speed: 2000,
        prevArrow: '<button type="button" class="slick-prev"> <img src="file:///C:/Users/pc/Downloads/Compressed/onlyme/onlyme/html/images/arrow-right-white.png" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="file:///C:/Users/pc/Downloads/Compressed/onlyme/onlyme/html/images/arrow-right-white.png" alt="arrow"></button>',
        pauseOnHover:true,
    });
    $('.portfolio-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.portfolio-content-wrapper',
        dots: false,
        fade: true,
        speed: 1500,
        arrows: false,
        focusOnSelect: false,
        pauseOnHover:true,
    });
    
    
 


}(jQuery));
