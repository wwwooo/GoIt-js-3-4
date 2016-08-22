var create = {
    form: function() {
        this.createElement({
            tag: 'form'
        });
    },
    h1: function() {
        this.createElement({
            tag: 'h1',
            parent: 'form',
            text: 'Тест по программированию'
        });
    },
    ol: function() {
        this.createElement({
            tag: 'ol',
            parent: 'form'
        });
    },
    countLi: 1,
    li: function() {
        this.createElement({
            tag: 'li',
            className: 'li-' + this.countLi,
            parent: 'ol'
        });
        this.createElement({
            tag: 'span',
            parent: 'li-' + this.countLi,
            text: 'Вопрос №' + this.countLi
        });

        for (var i = 1; i <= 3; i++) {
            this.createElement({
                tag: 'input',
                parent: 'li-' + this.countLi,
                attributs: {
                    type: 'radio',
                    id: 'radio-' + this.countLi + '-' + i,
                    name: 'radio-' + this.countLi
                }
            });
            this.createElement({
                tag: 'label',
                className: 'label',
                parent: 'li-' + this.countLi,
                attributs: {
                    for: 'radio-' + this.countLi + '-' + i,
                },
                text: 'Вариант ответа №' + i
            });
        }
        this.countLi++;
    },
    input: function() {
        this.createElement({
            tag: 'input',
            parent: 'form',
            className: 'submit',
            attributs: {
                type: 'submit',
                value: 'Проверить мои результаты'
            }
        });
    },
    createElement: function(options) {
        var parentElem = (options.parent) ?  document.querySelector('.' + options.parent) : document.body;
        var elem = document.createElement(options.tag);

        elem.classList.add(options.tag);
        (options.className) ? elem.classList.add(options.className) : '';
        if (options.attributs) {
            for (var key in options.attributs) {
                elem.setAttribute(key, options.attributs[key]);
            }
        }
        elem.innerHTML = options.text || '';
        parentElem.appendChild(elem);
    }
};

create.form();
create.h1();
create.ol();
create.li();
create.li();
create.li();
create.input();
