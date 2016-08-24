var setAttributes = function(attributs) {
    for (var key in attributs) {
        this.setAttribute(key, attributs[key]);
    }
};

var createElem = function(tag, parent, text) {
    var elem = document.createElement(tag);
    elem.innerHTML = text || '';
    parent.appendChild(elem).addAttrb = setAttributes;
    return elem;
};

var form = createElem('form', document.body);
var h1 = createElem('h1', form, 'Тест по программированию');
var ol = createElem('ol', form);
var li = createElem('li', ol);
var span = createElem('span', li, 'Вопрос №1');
var radio = createElem('input', li)
radio.addAttrb({'type': 'radio', 'id': 'radio-1-1', 'name': 'radio-1'});
var label = createElem('label', li, 'Вариант ответа №1');
label.addAttrb({for: 'radio-1-1'});
var radio = createElem('input', li);
radio.addAttrb({'type': 'radio', 'id': 'radio-1-2', 'name': 'radio-1'});
var label = createElem('label', li, 'Вариант ответа №2');
label.addAttrb({for: 'radio-1-2'});
var radio = createElem('input', li);
radio.addAttrb({type: 'radio', id: 'radio-1-3', name: 'radio-1'});
var label = createElem('label', li, 'Вариант ответа №3');
label.addAttrb({for: 'radio-1-3'});

var li = createElem('li', ol);
var span = createElem('span', li, 'Вопрос №2');
var radio = createElem('input', li);
radio.addAttrb({type: 'radio', id: 'radio-2-1', name: 'radio-2'});
var label = createElem('label', li, 'Вариант ответа №1');
label.addAttrb({for: 'radio-2-1'});
var radio = createElem('input', li);
radio.addAttrb({type: 'radio', id: 'radio-2-2', name: 'radio-2'});
var label = createElem('label', li, 'Вариант ответа №2');
label.addAttrb({for: 'radio-2-2'});
var radio = createElem('input', li);
radio.addAttrb({type: 'radio', id: 'radio-2-3', name: 'radio-2'});
var label = createElem('label', li, 'Вариант ответа №3');
label.addAttrb({for: 'radio-2-3'});

var li = createElem('li', ol);
var span = createElem('span', li, 'Вопрос №3');
var radio = createElem('input', li);
radio.addAttrb({type: 'radio', id: 'radio-3-1', name: 'radio-3'});
var label = createElem('label', li, 'Вариант ответа №1');
label.addAttrb({for: 'radio-3-1'});

var radio = createElem('input', li);
radio.addAttrb({type: 'radio', id: 'radio-3-2', name: 'radio-3'});
var label = createElem('label', li, 'Вариант ответа №2');
label.addAttrb({for: 'radio-3-2'});

var radio = createElem('input', li);
radio.addAttrb({type: 'radio', id: 'radio-3-3', name: 'radio-3'});
var label = createElem('label', li, 'Вариант ответа №3');
label.addAttrb({for: 'radio-3-3'});

var submit = createElem('input', form);
submit.addAttrb({type: 'submit', value: 'Проверить мои результаты'});
