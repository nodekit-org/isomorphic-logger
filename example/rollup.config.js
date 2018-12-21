const commonjs = require('rollup-plugin-commonjs');
const path = require('path');

const CWD = process.cwd();
console.log('current working directory', CWD);

const EXAMPLE_PATH = path.resolve(CWD, './example');

module.exports = {
  input: path.resolve(EXAMPLE_PATH, 'script.js'),
  output: {
    file: path.resolve(EXAMPLE_PATH, 'bundle.js'),
    format: 'iife',
  },
  plugins: [
    commonjs(),
  ],
};
