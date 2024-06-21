$(function () {


    $(".main_visual_slide").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    })


    $('.main_product_slide').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
    });

    $('.main_product .arrows .prev').on('click', function () {
        $('.main_product_slide').slick('slickPrev')
    });

    $('.main_product .arrows .next').on('click', function () {
        $('.main_product_slide').slick('slickNext')
    });

    $('.main_customer .news .news_menu button').on('click', function () {
        let idx = $(this).parent().index();
        $('.main_customer .new_content>ul')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on');

        $(this).parent().addClass('on').siblings().removeClass('on')
    });

    $('.to_top button').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $('#f_ink').on('change', function () {
        let lnk = $(this).val();
        console.log(lnk);

        if (lnk) {
            window.open(lnk)
        }
    })

    AOS.init();

})
