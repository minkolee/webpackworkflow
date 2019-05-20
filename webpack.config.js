const path = require('path');

module.exports = {
    entry: './script/index.js',
    output: {
        path: path.resolve(__dirname,"dist/script"),
        filename: "app.js"
    }
};