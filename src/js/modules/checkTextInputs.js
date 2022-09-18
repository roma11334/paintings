const checkTextInputs = (selector) => {
    let inputs = document.querySelectorAll(selector);

    inputs.forEach(item => {
        item.addEventListener('keypress', (e) => {
            if(!e.key.match(/[?!,.а-яА-ЯёЁ0-9\s]/)){
                e.preventDefault();
            }
        });

        item.addEventListener('input', (e) => {
            if(!item.value.match(/[?!,.а-яА-ЯёЁ0-9\s]/)){
                item.value = '';
            }
        });
    })
};

export default checkTextInputs;