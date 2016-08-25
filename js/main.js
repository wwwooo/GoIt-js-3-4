var addAttrs = function(obj, attributes) {
    for (var key in attributes) {
        obj.setAttribute(key, attributes[key]);
    }
};

var createElem = function(tag, parent, text, attrs) {
    var elem = document.createElement(tag);
    elem.innerHTML = text || '';
    addAttrs(elem, attrs);
    return parent.appendChild(elem);
};

var fragment = document.createDocumentFragment();
var h1 = createElem('h1', fragment, 'Тест по программированию');
var form = createElem('form', fragment);
var ol = createElem('ol', form);

for (var i = 1; i <= 3; i++) {
    var li = createElem('li', ol);
    var span = createElem('span', li, 'Вопрос №' + i);

    for (var n = 1; n <= 3; n++) {
        var label = createElem('label', li, 'Вариант ответа №' + n);
        var radio = createElem('input', label, null, {'type': 'radio', 'name': 'radio-' + i});
        var span = createElem('span', label);
    }
}

var submit = createElem('input', form, null, {type: 'submit', value: 'Проверить мои результаты'});

document.body.appendChild(fragment);
