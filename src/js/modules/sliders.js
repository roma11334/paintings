const sliders = (slides, dir, next, prev) => {
    const items = document.querySelectorAll(slides);

    let slideIndex = 1,
        paused = false;

    function showSlides(n) {
        if(n > items.length) {
            slideIndex = 1;
        }
        if(n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    };

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try{
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        nextBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });

        prevBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });

    } catch(e){
        
    }

    function activateSlider() {
        if(dir == 'vertical') {
            paused = setInterval(function(){
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInUp');
                items[slideIndex - 1].classList.add('slideInDown');
            }, 3000);
        }
    
        if(dir == 'horizontal') {
            paused = setInterval(function(){
                plusSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, 3000);
        }
    }

    activateSlider();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener('mouseleave', () => {
        activateSlider();
    });

    
};

export default sliders;