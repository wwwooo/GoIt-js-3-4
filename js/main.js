var create = {
    element: function(options) {
        var parentElem = (options.parent) ?  document.querySelector('.' + options.parent) : document.body;
        var elem = document.createElement(options.tag);

        if (options.attributs) {
            for (var key in options.attributs) {
                elem.setAttribute(key, options.attributs[key]);
            }
        }
        elem.classList.add(options.tag);
        (options.className) ? elem.classList.add(options.className) : '';
        elem.innerHTML = options.text || '';
        parentElem.appendChild(elem);
    }
};

create.element({
    tag: 'h1',
    text: 'Тест по программированию'
});
create.element({
    tag: 'form',
});
create.element({
    tag: 'ol',
    parent: 'form'
});

create.element({
    tag: 'li',
    className: 'li-1',
    parent: 'ol'
});
create.element({
    tag: 'li',
    className: 'li-2',
    parent: 'ol'
});
create.element({
    tag: 'li',
    className: 'li-3',
    parent: 'ol'
});

create.element({
    tag: 'span',
    parent: 'li-1',
    text: 'Вопрос №1'
});
create.element({
    tag: 'span',
    parent: 'li-2',
    text: 'Вопрос №2'
});
create.element({
    tag: 'span',
    parent: 'li-3',
    text: 'Вопрос №3'
});
/*---------------------------li-1 options----------------------------------*/
create.element({
    tag: 'input',
    parent: 'li-1',
    attributs: {
        type: 'radio',
        id: 'optradio-1-1',
        name: 'optradio-1'
    }
});
create.element({
    tag: 'label',
    className: 'label',
    parent: 'li-1',
    attributs: {
        for: 'optradio-1-1'
    },
    text: 'Ответ №1'
});
create.element({
    tag: 'input',
    parent: 'li-1',
    attributs: {
        type: 'radio',
        id: 'optradio-1-2',
        name: 'optradio-1'
    }
});
create.element({
    tag: 'label',
    className: 'label',
    parent: 'li-1',
    attributs: {
        for: 'optradio-1-2'
    },
    text: 'Ответ №2'
});
/*---------------------------li-2 options----------------------------------*/
create.element({
    tag: 'label',
    parent: 'li-2',
    text: 'Ответ №2'
});
/*---------------------------li-3 options----------------------------------*/
create.element({
    tag: 'label',
    parent: 'li-3',
    text: 'Ответ №3'
});
