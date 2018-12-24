$(document).ready(function () {
    var slider = $('#lightSlider').lightSlider({
        gallery: false,
        pager: false,
        item: 1,
        loop: false,
        slideMargin: 10,
        ussCSS: true,
        controls: true,
        enableDrag: false,
        enableTouch: false
    });

    $(document).on("click", "a#step1", function () {
        slider.goToSlide(0);
    });

    $(document).on("click", "a#step2", function () {
        slider.goToSlide(1);
    });

    $(document).on("click", "a#step3", function () {
        slider.goToSlide(2);
    });

    $(document).on("click", "button.prevStep", function () {
        slider.goToPrevSlide();
    })

    $(document).on("click", "button.nextStep", function () {
        slider.goToNextSlide();
    })
});