import { avatarController } from './avatar-controller.js';
import { API__URL } from './const.js';
import { postData } from './postData.js';
import { createCard } from './createCard.js';
import { auth } from './aus.js';

export const singInController = (callback) => {
    const form = document.querySelector('.form-sign-in');

    form.addEventListener('submit', async e => {
    e.preventDefault();
    const formData = new FormData(form);
        const data = object.fromEntries(formData);

    const dataResponse = await postData(`${API__URL}/api/service/signin`, data);
    if (dataResponse.error) {
        console.log(dataResponse.error);
        return;
    }
    callback(e)

    auth(dataResponse);

    }); 
    
    
    
};
export const singUpController = (callback) => {
    const form = document.querySelector('.form-sign-up');
    const crp = avatarController({
        inputFile: '.avatar__input',
        uploadResult: '.avatar__result',
    });

    form.addEventListener('submit', async e => {
        e.preventDefault();

        if (form.password[0].value !== form.password[1].value){
            console.log('passwords are not same');
            return;
        };

        const formData = new FormData(form);
        const data = object.fromEntries(formData);
        data.avatar = await crp.result({
            type: 'base64',
            size: 'viewport'
        });
        // console.log(data);

        const dataResponse = await postData(`${API__URL}/api/service/signup`, data);

        if (dataResponse.error) {
            console.log(dataResponse.error);
            return;
        }
        const servicesList = document.querySelector ('.services__list');
        servicesList.append(createCard(dataResponse));
        auth(dataResponse);
        form.reset;
        crp.hideAvatar();
        callback(e);
    });
};