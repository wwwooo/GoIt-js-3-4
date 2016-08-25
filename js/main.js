var addAttrs = function(obj, attributes) {
    for (var key in attributes) {
        obj.setAttribute(key, attributes[key]);
    }
};

var createElem = function(tag, parent, text) {
    var elem = document.createElement(tag);
    elem.innerHTML = text || '';
    return parent.appendChild(elem);
};

var form = createElem('form', document.body);
var h1 = createElem('h1', form, 'Тест по программированию');
var ol = createElem('ol', form);

for (var i = 1; i <= 3; i++) {
    var li = createElem('li', ol);
    var span = createElem('span', li, 'Вопрос №' + i);

    for (var n = 1; n <= 3; n++) {
        var label = createElem('label', li, 'Вариант ответа №' + n);
        var radio = createElem('input', label);
        addAttrs(radio, {'type': 'radio', 'name': 'radio-' + i});
        var span = createElem('span', label);
    }
}

var submit = createElem('input', form);
addAttrs(submit, {type: 'submit', value: 'Проверить мои результаты'});
