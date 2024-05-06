$(document).ready(function () {
    $("nav button:first-child").click(function() {
        $(".about_us > *:not(h2)").slideToggle();
    });
});
