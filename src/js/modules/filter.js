const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          allBtn = menu.querySelector('.all'),
          loversBtn = menu.querySelector('.lovers'),
          chefBtn = menu.querySelector('.chef'),
          girlBtn = menu.querySelector('.girl'),
          guyBtn = menu.querySelector('.guy'),
          grandmotherBtn = menu.querySelector('.grandmother'),
          granddadBtn = menu.querySelector('.granddad'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          allItems = wrapper.querySelectorAll('.all'),
          loversItems = wrapper.querySelectorAll('.lovers'),
          chefItems = wrapper.querySelectorAll('.chef'),
          girlItems = wrapper.querySelectorAll('.girl'),
          guyItems = wrapper.querySelectorAll('.guy'),
          grandmotherItems = wrapper.querySelectorAll('.grandmother'),
          granddadItems = wrapper.querySelectorAll('.granddad'),
          no = document.querySelector('.portfolio-no');

    const filterShow = (elem) => {
        allItems.forEach(item => {
            no.style.display = 'none';
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });

        elem.forEach(item => {
            item.style.display = 'block';
            item.classList.add('animated', 'fadeIn');
        });

        items.forEach(item => {
            item.classList.remove('active');
        });
        
        if(elem.length == 0){
            no.style.display = 'block';
            no.classList.add('animated');
        }
    }

    allBtn.addEventListener('click', () => {
        filterShow(allItems);
    });

    loversBtn.addEventListener('click', () => {
        filterShow(loversItems);
    });

    chefBtn.addEventListener('click', () => {
        filterShow(chefItems);
    });

    girlBtn.addEventListener('click', () => {
        filterShow(girlItems);
    });

    guyBtn.addEventListener('click', () => {
        filterShow(guyItems);
    });

    grandmotherBtn.addEventListener('click', () => {
        filterShow(grandmotherItems);
    });

    granddadBtn.addEventListener('click', () => {
        filterShow(granddadItems);
    });

    menu.addEventListener('click', (e) => {
        
        e.target.classList.add('active');
        
    });


};

export default filter;