// Named class declaration (✔)
class Calculator {}

// Class inheritance (✔)
class AdvancedCalculator extends Calculator {}

// Anonymous class assigned to a constant (✔)
const Logger = class {}


// Class as property with literal string (✔)
const classes_ = {
    ['LiteralClass']: class {}
}


// // Reassigned class expression (✔...) what if the variable is reassigned in runtime?
// let Formatter;
// Formatter = class {
//     capitalize(str) { return str.toUpperCase() }
// }
//
// // Anonymous class in object property (✔...) reference as 'utils.Formatter'
// export const utils = {
//     Formatter: class {
//         format(text) { return text.trim() }
//     }
// }
//
// // Default exported class (✔...) follow the name from the module and then the fan-in
// export default class {
//     constructor() { this.id = Math.random() }
// }
//
// // Anonymous class in array
// const middlewares = [
//     class {
//         handle(req, res) { /* ... */ }
//     }
// ]
//
// // Class with anonymous parent
// class SuperCalculator extends class {
//     baseOp() { return 100 }
// } {
//     complexOp() { return this.baseOp() * 2 }
// }
//
// // Class with computed property name
// const className = 'DynamicClass';
// const classes = {
//     [className]: class {
//         method() { /* ... */ }
//     }
// };
//
// // Immediately-invoked class expression
// (() => {
//     const temp = class TaskManager {
//         scheduleA() { /* ... */ }
//     }
//     new temp()
// })();
//
// // Immediately-invoked class expression
// (() => {
//     class Scheduler {
//         schedule() { /* ... */ }
//     }
//     new Scheduler()
// })();