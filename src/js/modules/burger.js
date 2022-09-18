const burger = (btn, menuBurger) => {
    const button = document.querySelector(btn),
          menu = document.querySelector(menuBurger);

    menu.style.display = 'none';

    button.addEventListener('click', () => {
        if(menu.style.display == 'none' && window.screen.availWidth < 993){
            menu.style.display = 'block';
        }else{
            menu.style.display = 'none';
        }
    })

    window.addEventListener('resize', () => {
        if(window.screen.availWidth > 992){
            menu.style.display = 'none';
        }
    })

    
}

export default burger;