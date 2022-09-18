import modals from './modules/modals'
import sliders from './modules/sliders'
import forms from './modules/forms'
import checkTextInputs from './modules/checkTextInputs'
import showMoreStyles from './modules/showMoreStyles'
import calc from './modules/calc'
import filter from './modules/filter'
import picturesSize from './modules/picturesSize'
import accordion from './modules/accordion'
import burger from './modules/burger'
import object from './modules/object'
import drops from './modules/drops'

document.addEventListener('DOMContentLoaded', () => {
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-next-btn', '.main-prev-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('#styles .row', '.button-styles');
    calc('#size', '#material', '#options', '.promocode', '.calc-price')
    filter();
    picturesSize('.sizes-block');
    accordion('.accordion-heading', '.accordion-block');
    burger('.burger', '.burger-menu');
    //object();
    drops();
})