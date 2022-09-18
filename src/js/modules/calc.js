const calc = (size, material, options, promo, price) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promoBlock = document.querySelector(promo),
          priceBlock = document.querySelector(price);
    
    const calcFunc = () => {
        if(sizeBlock.value == '' || materialBlock.value == ''){
            priceBlock.textContent = 'Пожалуйста выберите размер и материал картинок';
        } else if(promoBlock.value == 'IWANTPOPART'){
            priceBlock.textContent = Math.round(((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value)) * 0.7);
        }else{
            priceBlock.textContent = Math.round(((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value)));
        }
    }

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promoBlock.addEventListener('input', calcFunc);

};

export default calc;
