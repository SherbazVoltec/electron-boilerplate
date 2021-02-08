const path = require('path');
const styles = require('./styles/main.css')
require('./_req')
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}