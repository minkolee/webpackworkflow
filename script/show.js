function show(content) {
    let app = document.getElementById("app");
    app.innerText = "hello " + content + " saner";
    let p = document.createElement("P");
    p.innerText = 'gugugug';
    app.appendChild(p);
}

module.exports = show;
