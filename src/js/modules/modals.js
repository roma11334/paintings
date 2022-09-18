const modals = () => {

    let keyPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, deleteBtn = false) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const close_data_modal = document.querySelectorAll('[data-modal]');
        let marginRight = computedMargin();

        trigger.forEach(item => {
            item.addEventListener('click',(e) => {

                keyPressed = true;

                if(e.target) {
                    e.preventDefault();
                }

                if(deleteBtn) item.remove();
                
                close_data_modal.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                });

                modal.style.display = "block";
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${marginRight}px`;
            });
        })

        

        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';

            close_data_modal.forEach(item => {
                item.style.display = 'none';
            });
            

            document.body.style.marginRight = '0px';
        });

        modal.addEventListener('click', (e) => {
            if(e.target === modal){

                close_data_modal.forEach(item => {
                    item.style.display = 'none';
                });

                modal.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = '0px';
            }

            
            
        });
        
        
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            let b;
            document.querySelectorAll('[data-modal]').forEach(item => {
                let a = getComputedStyle(item);
                if(a.display !== 'none'){
                    b = 'block';
                }
            });

            if(!b){
                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
                let marginRight = computedMargin();
                document.body.style.marginRight = `${marginRight}px`;
            }
        }, time)
    }

    function computedMargin() {
        let x = document.createElement('div');
        x.style.width = '50px';
        x.style.height = '50px';
        x.style.overflowY = 'scroll';
        x.style.visibility = 'hidden';
        document.body.appendChild(x);
        let marginR = x.offsetWidth - x.clientWidth;
        x.remove();
        return marginR;
    }

    function openModalByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
            if(!keyPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)){
                document.querySelector(selector).click();
            }
        });
        
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift','.popup-gift', '.popup-gift .popup-close', true);
    //showModalByTime('.popup-consultation', 3000);
    openModalByScroll('.fixed-gift');
    
    
}; 

export default modals;