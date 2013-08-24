var thaisa = {};

(function ($) {

thaisa.scrollTo = function($element, speed) {
    var speed = speed || 400;
    $("html, body").animate({
        scrollTop: $element.offset().top
    }, speed);
};

})(jQuery);
