var main = document.getElementsByTagName("main")[0];
var thing = document.getElementById("add")
var words = [
    "a",
    "ab",
    "abc",
    "abcd",
    "abcde",
    "abcdef",
    "abcdefg",
];

var points = 0;

function addPoints(val) {
    points += val;
    document.getElementById('pkt').textContent = String(points);
}

function calculatePoints(text) {
    if (parseInt(text) >= 0) {
        addPoints(parseInt(text));
    }
    else {
        addPoints(text.length)
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

thing.onclick = function () {
    if (getRandomInt(2) == 1) {
        var spanElement = document.createElement('span');
        spanElement.textContent = " " + words[getRandomInt(words.length)];
        spanElement.addEventListener('click', (el)=>{
            calculatePoints(el.target.textContent);
            el.target.remove();
        });
        main.children[getRandomInt(6)].appendChild(spanElement);
    }
    else {
        var spanElement = document.createElement('span');
        spanElement.textContent = " " + String(getRandomInt(10) + 1);
        spanElement.addEventListener('click', (el)=>{
            calculatePoints(el.target.textContent);
            el.target.remove();
        });
        main.children[getRandomInt(6)].appendChild(spanElement);
    }
};

document.getElementById("del").onclick = function () {
    chosenH = main.children[getRandomInt(6)];
    chosenH.children[getRandomInt(chosenH.children.length)].remove();
}
for (var i = 0; i < 100; i++) {
    if (getRandomInt(2) == 1) {
        var spanElement = document.createElement('span');
        spanElement.textContent = " " + words[getRandomInt(words.length)];
        spanElement.addEventListener('click', (el)=>{
            calculatePoints(el.target.textContent);
            el.target.remove();
        });
        main.children[getRandomInt(6)].appendChild(spanElement);
    }
    else {
        var spanElement = document.createElement('span');
        spanElement.textContent = " " + String(getRandomInt(10) + 1);
        spanElement.addEventListener('click', (el)=>{
            calculatePoints(el.target.textContent);
            el.target.remove();
        });
        main.children[getRandomInt(6)].appendChild(spanElement);
    }
}

var clearThings = window.setInterval(function() {
    chosenH = main.children[getRandomInt(6)];
    chosenH.children[getRandomInt(chosenH.children.length)].remove();
}, 1000);

window.setTimeout(function() {
    console.log("end of time!");
    window.clearInterval(clearThings);
    main.remove();
}, 30000)