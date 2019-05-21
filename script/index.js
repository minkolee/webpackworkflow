var show = require("./show.js");
var maincss = require("../css/main.css");
show('JS代码生效中...');

var div = document.getElementById("app");

var start = 0;

var turn = setInterval(function () {
    if (start === 360) {
        clearInterval(turn);
    }
    div.style.setProperty("transform", "rotate(" + (start) + "deg)");
    start++;
}, 30);