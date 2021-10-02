const click = document.querySelector('.hamburger-menu');
const menuLinks = document.querySelector('.nav-menu');
const arrows = document.querySelector('img.arrows');
let isClicked = false;

click.addEventListener('click', function() {
    menuLinks.classList.toggle('active');
    click.classList.toggle('active');
});

arrows.addEventListener('click', function() {
    arrows.classList.toggle('active');
    if(isClicked === false) {
        $('html,body').animate({
            scrollTop: $("#second-view").offset().top}, 'slow'
        );
        isClicked = true;
    } else {
        $('html,body').animate({
            scrollTop: $("#first-view").offset().top}, 'slow'
        );
        isClicked = false;
    }
});

