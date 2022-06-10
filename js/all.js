$(document).ready(function () {
    $(".nav .show-btn").click(function (e) {
        e.preventDefault();
        $(".nav .menu").toggleClass("active");
    });
    $(".cart .main .menu .heart-no").click(function (e) {
        e.preventDefault();
        $(this).addClass("active");
        $(this).parent().find(".heart-yes").addClass("active");
    });
    $(".cart .main .menu .heart-yes").click(function (e) {
        e.preventDefault();
        $(this).removeClass("active");
        $(this).parent().find(".heart-no").removeClass("active");
    });
});