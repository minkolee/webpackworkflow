var show = require("./show.js");
var maincss = require("../css/main.css");
show('JS代码生效中...');

var div = document.getElementById("app");

var start = 0;

setInterval(function () {
    div.style.setProperty("transform", "rotate(" + (++start) + "deg)");
}, 30);