import { sum } from './es6-module';

import commonjsModule = require('./commonjs-module');
const { multiply } = commonjsModule;

export function calculate(a: number, b: number): number {
    return sum(a, b) + multiply(a, b);
}

// @ts-ignore
import not_import from './non-existent-import'
const not_require = require('./non-existent-require')
