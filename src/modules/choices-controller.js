import Choices from 'choices.js';

export const choicesController = () => {
    const option = {
        searchEnabled: false,
        shouldSort: false,
        itemSelectText: '',
        // className: {
        //     containerOuteer: 'choices form__select-category'
        // }
    };
    new Choices('.form__select-category', {...option, classNames: {
        containerOuteer: 'choices form__select-category'
    }});

    new Choices('.form__select-price');
}
choicesController();