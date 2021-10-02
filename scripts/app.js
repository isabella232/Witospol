const click = document.querySelector('.hamburger-menu');
const menuLinks = document.querySelector('.nav-menu');
const arrows = document.querySelector('img.arrows');

click.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
    click.classList.toggle('active');
});

arrows.addEventListener('click', function() {
    arrows.classList.toggle('active');
    $('html,body').animate({
        scrollTop: $(".third-data").offset().top}, 'slow'
    );
});

