const path = require('path');
require('./styles/main')
require('./styles/global')
require('./_req')
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}