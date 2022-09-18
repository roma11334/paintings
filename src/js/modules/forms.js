import { postData } from "../services/requests";

const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          uploads = document.querySelectorAll('[name="upload"]'),
          textarea = document.querySelectorAll('textarea'),
          select = document.querySelectorAll('select'),
          calcPrice = document.querySelector('.calc-price');

    
    const message = {
        loading: 'Загрузка...',
        failure: 'Что-то пошло не так',
        success: 'Спасибо! Мы скоро с вами свяжемся =))',
        spinner: 'assets/img/spinner.gif',
        fail: 'assets/img/fail.png',
        ok: 'assets/img/ok.png'
    }

    const path = {
        designer: './assets/designer.php',
        questions: './assets/server.php'
    }

    

    uploads.forEach(item => {
        item.addEventListener('input', () => {
            let arr = item.files[0].name.split('.');
            if(arr[0].length > 6){
                item.previousElementSibling.textContent = arr[0].substring(0,6) + '...' + arr[1];
            } else{
                item.previousElementSibling.textContent = item.files[0].name;
            }
        });
    });

    function clearInputs(){
        inputs.forEach(item => {
            item.value = '';
        });

        textarea.forEach(item => {
            item.value = '';
        });

        uploads.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
        });

        select.forEach(item => {
            item.value = '';
        });

        document.querySelector('.promocode').value = '';
        calcPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {

            e.preventDefault();
            let mess = document.createElement('div');
            mess.classList.add('status');
            item.parentNode.appendChild(mess);

            item.classList.add('animated', 'fadeOutUp');
            setTimeout(()=>{
                item.style.display = 'none';
            },400);

            let messageImg = document.createElement('img');
            messageImg.setAttribute('src', message.spinner);
            messageImg.classList.add('animated', 'fadeInUp');

            mess.appendChild(messageImg);
            
            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            mess.appendChild(textMessage);

           
            const formData = new FormData(item);

             
            if(item.classList.contains('calc_form')){
                
                let calcPriceNew = document.querySelector('.calc-price');
                
                formData.append('Price: ', +calcPriceNew.innerHTML);
            }

            let pathData;
            item.closest('.popup-design') || item.classList.contains('calc_form') ? pathData = path.designer : pathData = path.questions;
            
            

            let res = postData(pathData, formData)
                      .then((res) => {
                        console.log(res);
                        textMessage.innerHTML = message.success;
                        messageImg.setAttribute('src', message.ok);
                      })
                      .catch(() => {
                        textMessage.innerHTML = message.failure;
                        messageImg.setAttribute('src', message.fail);
                      })
                      .finally(() => {
                            clearInputs();
                            setTimeout(() =>{
                                mess.remove();
                                item.style.display = 'block';
                                item.classList.remove('fadeOutUp');
                                item.classList.add('fadeInUp');
                                // hideContent('[data-modal]');
                            } , 3000);
                        
                      });
            
        })
    })
}

export default forms;

    // let risBut = document.createElement('button');
    // let pole = document.createElement('div');
    // pole.style.width = '400px';
    // pole.style.height = '400px';
    // pole.style.border = '1px solid black';
    
    // risBut.textContent = 'Нарисовать залупу';

    // document.body.appendChild(risBut);
    // document.body.appendChild(pole);

    // risBut.addEventListener('click', () => {

    //     setInterval(() => {

    //     let elem = document.createElement('div');
    //     let zalupe = document.createElement('img');

    //     let randW = Math.round(Math.random() * (300 - 100));
    //     let randH = Math.round(Math.random() * (200 - 100));

    //     console.log(randW);

    //     zalupe.src = './assets/img/2492773.png';
    //     zalupe.style.position = 'relative';

    //     zalupe.style.left = `${randW}px`;
    //     zalupe.style.top = `${randH}px`;

    //     zalupe.style.width = '30px';
    //     zalupe.style.height = '30px';

    //     zalupe.classList.add('fuck');

    //     elem.style.width = '40px';
    //     elem.style.height = '40px';
    //     //elem.style.border = '1px solid black';
    //     pole.appendChild(elem);
    //     elem.appendChild(zalupe);

    //     },500)

        

        
    // });

    // pole.addEventListener('click', (e) => {
        
    //     try{
    //         let z = document.querySelectorAll('.fuck');
    //         console.log(z);

    
    //         z.forEach(item => {
    //             item.addEventListener('click', () => {
    //                 console.log('aaa');
    //                 item.remove();
    //             });
    //         });
    //     }catch(e){
    
    //     }

    // });

    



