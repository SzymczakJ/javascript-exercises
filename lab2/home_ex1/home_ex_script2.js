var button = document.getElementById('btn');
function eventhandler() {
    var form = document.forms.form;
    var text = form.elements.text_field.value;
    var number = form.elements.number_field.value;
    document.write(text);
    document.write(number);
}
button.onclick = eventhandler