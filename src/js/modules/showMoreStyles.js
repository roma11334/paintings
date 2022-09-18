import { getResource } from "../services/requests";

const showMoreStyles = (id, btn) => {
    const button = document.querySelector(btn);

    button.addEventListener('click', function() {
        getResource('assets/db.json')
                .then(res => showStyles(res.styles))
                .catch(error => console.log(error));

        this.remove();
    })

    function showStyles(res){

        res.forEach(({src, title, link}) => {
            let elem = document.createElement('div');
            elem.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            elem.innerHTML = `
                <div class='styles-block'>
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
            document.querySelector(id).appendChild(elem);
        });
    }
};
export default showMoreStyles;