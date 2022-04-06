var setButton = document.getElementById("set");
setButton.onclick = setHandler;
var resetButton = document.getElementById("reset");
resetButton.onclick = resetHandler;
var headers = document.querySelector("header");
var navs = document.querySelector("nav");
var h1s = document.getElementById("animated");
var mains = document.querySelector("main");
var fotters = document.querySelector("footer");
var aside = document.querySelector("aside");

var set = true;
function setHandler() {
    removeStyle(headers);
    removeStyle(navs);
    removeStyle(h1s);
    removeStyle(mains);
    removeStyle(fotters);
    removeStyle(aside);
}

function removeStyle(element) {
    element.style = "all: revert";
}

function resetHandler(element) {
    setStyle(headers);
    setStyle(navs);
    setStyle(h1s);
    setStyle(mains);
    setStyle(fotters);
    setStyle(aside);
}

function setStyle(element) {
    element.style = "";
}