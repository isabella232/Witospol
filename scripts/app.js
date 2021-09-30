/*
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
*/
$("img.arrows").click(function() {
    console.log('dziaala');
    $('html,body').animate({
        scrollTop: $(".third-data").offset().top},
        'slow');
});

/*
$("img.arrow").click(function(){
    $(this).toggleClass("img.arrow.down")  ; 
});
*/