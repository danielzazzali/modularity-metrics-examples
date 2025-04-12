// 1. Named class declaration with type annotations
class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }
}

// 2. Typed anonymous class assigned to variable
const Logger = class {
    log(message: string): void {
        console.log(message);
    }
};

// 3. Anonymous class in typed object property
const utils: { Formatter: new () => { format: (text: string) => string } } = {
    Formatter: class {
        format(text: string): string {
            return text.trim();
        }
    }
};

// 4. Class in array with type assertion
const middlewares: Array<new () => { handle: () => void }> = [
    // @ts-ignore
    class {
        handle(req: Request, res: Response): void {
            /* ... */
        }
    }
];

// 5. Default exported class with constructor typing
export default class {
    private id: number;

    constructor() {
        this.id = Math.random();
    }
}

// 6. Class with typed anonymous parent
class AdvancedCalculator extends class {
    baseOp(): number {
        return 100;
    }
} {
    complexOp(): number {
        return this.baseOp() * 2;
    }
}

// 7. Reassigned class expression with interface
interface IFormatter {
    capitalize(str: string): string;
}

let Formatter: new () => IFormatter;
Formatter = class {
    capitalize(str: string): string {
        return str.toUpperCase();
    }
};

// 8. Class with computed property name and generics
const className = 'DynamicClass';
const classes: Record<string, new <T>(value: T) => { value: T }> = {
    [className]: class<T> {
        constructor(public value: T) {}
    }
};

// 9. Immediately-invoked class expression with access modifiers
(() => {
    const temp = class TaskManager {
        private scheduleTimer: number | undefined;

        schedule(): void {
            /* ... */
        }
    };
    new temp();
})();