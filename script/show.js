function show(content) {
    let app = document.getElementById("app");
    app.innerText = content;
    let p = document.createElement("P");
    p.innerText = '添加元素生效中...';
    app.appendChild(p);
}

module.exports = show;
