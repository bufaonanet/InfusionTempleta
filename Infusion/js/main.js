(function () {

    var $body = document.querySelector('body');
    $body.classList.remove('no-js');
    $body.classList.add('js');  

    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        withEnable: 1024
    });    

    var carousel = new Carousel({
        container: '.laptop-slider .slideshow',
        itens: '.slideshow figure',
        btnNext: '.slideshow .next',
        btnPrev: '.slideshow .prev'
    }); 

    var quoteCarousel = new Carousel({
        container: '.quote-slideshow',
        itens: '.quote-slideshow figure',
        btnNext: '.quote-slideshow .next',
        btnPrev: '.quote-slideshow .prev'
    });    

})();