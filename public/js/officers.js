$(document).ready(function() {
    $(".year-link").click(function () {
        thaisa.scrollTo($("[data-year='" + $(this).attr("id") + "']"));
    });

    $(".top-link").click(function() {
        thaisa.scrollTo($(".menu-bar"));
    })
});
