$('.list').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: `<button type="button" class="slick-btn slick-btn--prev">
                <img class="slick-arrow slick-arrow--prev" src="'../../assets/images/icon-arrow.svg" alt="">
                </button>`,
    nextArrow: `<button type="button" class="slick-btn slick-btn--next">
                <img class="slick-arrow slick-arrow--next" src="'../../assets/images/icon-arrow.svg" alt="">
                </button>`,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        }
    ]
});

$('.reviews-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: 30,
    arrows: true,
    prevArrow: `<button type="button" class="slick-btn slick-btn--prev">
                <img class="slick-arrow slick-arrow--prev" src="'../../assets/images/icon-arrow.svg" alt="">
                </button>`,
    nextArrow: `<button type="button" class="slick-btn slick-btn--next">
                <img class="slick-arrow slick-arrow--next" src="'../../assets/images/icon-arrow.svg" alt="">
                </button>`,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: false,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 1,
                arrows: false,
            }
        }
    ]
});