function Carousel(config) {

    this.container = (typeof config.container === 'string') ?
        document.querySelector(config.container) : config.container;

    this.itens = (typeof config.itens === 'string') ?
        document.querySelectorAll(config.itens) : config.itens;

    this.btnNext = (typeof config.btnNext === 'string') ?
        document.querySelector(config.btnNext) : config.btnNext;

    this.btnPrev = (typeof config.btnPrev === 'string') ?
        document.querySelector(config.btnPrev) : config.btnPrev;

    var _this = this;
    var _currentSlide = 0;

    init();

    function init() {
        var show = _this.container.querySelectorAll('.show');

        show.forEach(item => {
            item.classList.remove('show');
        });

        _this.itens[0].classList.add('show');
        _this.btnNext.removeAttribute('style');
        _this.btnPrev.removeAttribute('style');

        addListeners();
    }

    function addListeners() {
        _this.btnNext.addEventListener('click', showNextSlide);
        _this.btnPrev.addEventListener('click', showPrevSlide);

    }

    function showNextSlide() {
        _currentSlide++;
        showSlide();

    }

    function showPrevSlide() {
        _currentSlide--;
        showSlide();
    }

    function showSlide() {
        var qtd = _this.itens.length;
        var slide = Math.abs(_currentSlide % qtd);

        _this.container.querySelector('.show').classList.remove('show');
        _this.itens[slide].classList.add('show');
    }


}