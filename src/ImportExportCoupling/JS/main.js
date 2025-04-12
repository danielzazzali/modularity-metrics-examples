import { sum } from './es6-module';
const { multiply } = require('./commonjs-module');

export function calculate(a, b) {
    return sum(a, b) + multiply(a, b);
}

import not_import from './non-existent-import'
const not_require = require('./non-existent-require')
