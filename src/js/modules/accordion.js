const accordion = (trigerSelector, itemSelector) => {
    const btns = document.querySelectorAll(trigerSelector),
          blocks = document.querySelectorAll(itemSelector);

    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    })

    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            if(!this.classList.contains('active')){
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                })
                this.classList.toggle('active', 'active-style' );
            }
        })
    })
};

export default accordion;