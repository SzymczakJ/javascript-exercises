class Span extends HTMLElement {
    constructor() {
        super();
    }
}
window.customElements.define('custom-span',Span);


var textarea = document.getElementById("txtarea");
var spans = document.getElementsByTagName("custom-span");
var n = parseInt(textarea.value);
var old_value = n;
var new_possible_value = parseInt(textarea.value);

function mainFunc() {
    var new_possible_value = parseInt(textarea.value);
    if (new_possible_value != old_value) {
        old_value = new_possible_value;
        n = new_possible_value;
    }
    else {
        if (n > 0) {
            n--;
        }
    }
    updateSpans(n);
}

function updateSpans(value) {
    for (let element of spans) {
        element.innerText = value;
    }
}

window.setInterval(mainFunc, 1000);