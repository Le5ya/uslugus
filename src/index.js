import './index.html';
import './index.scss';
import { modalController } from './modules/modal-controller.js';
import { selectController } from './modules/select__controller';
import { showPassword } from './modules/show-password';
import { choicesController } from './modules/choices-controller';
import { avatarController } from './modules/avatar-controller';
import { getCategory } from './modules/getCategory';
import { renderList } from './modules/renderList';
import { searchControl } from './modules/searchControl';

const init = () => {
    modalController({
        modal: '.modal__sign-in',
        btnOpen: '.header__auth_sing-in',
        btnClose: '.modal__close'
    });
    modalController({
        modal: '.modal__sign-up',
        btnOpen: '.header__auth_sing-up',
        btnClose: '.modal__close'
    });
    const modalPerson = modalController({
        modal: '.modal__person',
        btnOpen: '.service',
        parrentBtns: '.services__list',
        btnClose: '.modal__close',
        handlerOpenModal: async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json());

            const comments = document.querySelectorAll('.review__text');

            comments.forEach((comment) => {
                if(comment.scrollHeight > 38) {
                    // console.log(comment);
                const button = document.createElement('button');
                button.classList.add('review__open');
                button.textContent = 'Развернуть'
                comment.after(button);

                button .addEventListener('click', () => {
                    comment.classList.toggle('review__text-open');
                    button.textContent = comment.classList.contains('review__text-open')
                    ? 'Свернуть'
                    : 'Развернуть'
                })

                }
            })
            
        }
        
    });
    // modalPerson.onOpenModal(() => {
    //     console.log('Hi, friends!');
    // }) 
    selectController({
        openBtn: '.category__title',
        openBlock: '.category__list',
        closeBtn: '.category__btn',
        handlerChange: (value) => {
            console.log(value);
        }
    });
    
    showPassword();
    choicesController();
    const crp = avatarController({
        inputFile: '.avatar__input',
        uploadResult: '.avatar__result',
    });
};
getCategory();
renderList();
searchControl();

init();
