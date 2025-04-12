// 1. Named class declaration
class Calculator {
    add(a, b) { return a + b }
}

// 2. Anonymous class assigned to variable
const Logger = class {
    log(message) { console.log(message) }
}

// 3. Anonymous class in object property
const utils = {
    Formatter: class {
        format(text) { return text.trim() }
    }
}

// 4. Class in array (should remain anonymous)
const middlewares = [
    class {
        handle(req, res) { /* ... */ }
    }
]

// 5. Default exported class
export default class {
    constructor() { this.id = Math.random() }
}

// 6. Class with anonymous parent
class AdvancedCalculator extends class {
    baseOp() { return 100 }
} {
    complexOp() { return this.baseOp() * 2 }
}

// 7. Reassigned class expression
let Formatter;
Formatter = class {
    capitalize(str) { return str.toUpperCase() }
}

// 8. Class with computed property name
const className = 'DynamicClass';
const classes = {
    [className]: class {
        method() { /* ... */ }
    }
}

    // 9. Immediately-invoked class expression
    (() => {
        const temp = class TaskManager {
            schedule() { /* ... */ }
        }
        new temp()
    })()