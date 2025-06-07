// 1. Function Declaration
function functionDeclaration() {}

// 2. Function Expression
const functionExpression = function() {};

// 3. Named Function Expression
const namedFunctionExpression = function namedFunction() {};

// 4. Arrow Function (no parameters)
const arrowFunction = () => {};

// 5. Arrow Function (with parameters)
const arrowFunctionWithParams = (a: number, b: number) => {return a*b};

// 6. Arrow Function (single parameter without parentheses)
const arrowSingleParam = (a: any) => {return a};

// 7. Immediately Invoked Function Expression (IIFE)
(function() {})();

// 8. IIFE with parameters
(function(a, b) {})(1, 2);

// 9. Arrow Function IIFE
(() => {})();

// 10. Generator Function
function* generatorFunction() {}

// 11. Async Function
async function asyncFunction() {}

// 12. Async Arrow Function
const asyncArrowFunction = async () => {};

// 13. Async Generator Function
async function* asyncGeneratorFunction() {}

// 14. Function with Default Parameters
function defaultParameters(a = 1, b = 2) {}

// 15. Function with Rest Parameters
function restParameters(...args: any[]) {}

// 18. Recursive Function
function recursiveFunction() {
    recursiveFunction();
}

// 19. Function Returning a Function
function functionReturningFunction() {
    // 33. Function
    return function() {};
}

// 21. Function Using new Function Constructor
const dynamicFunction = new Function('a', 'b', '');

// 22. Function in Array
const functionArray = [function() {}, () => {}];

// 24. Function with Type Comment (JSDoc)
/**
 * @param {number} a
 * @param {number} b
 */
function jsdocCommentedFunction(a: any, b: any) {}

// 25. Function with Empty Comment
function functionWithEmptyComment() {/**/}

// 26. Function with Try-Catch Block
function functionWithTryCatch() {
    try {} catch(e) {}
}

// 27. Function with Nested Blocks
function functionWithBlocks() {{}{}}

// 28. Function with Void Operator
const voidFunction = void function() {};

// 29. Immediately Invoked Async Function
(async function() {})();

// 30. Function with Generator Return
function* generatorWithReturn() {
    return;
}

// 31. Function with Async Return
async function asyncWithReturn() {
    return;
}

// 32. Function with Spread Parameter
function spreadParameter(a: any, ...rest: any[]) {}