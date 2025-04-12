type ExampleType = {
    name: string;
    age: number;
};

function declaredFunction(arg: ExampleType) {
    return arg;
}

const expressedFunction = function(arg: ExampleType) {
    return arg;
};

const arrowFunction = (arg: ExampleType) => {
    return arg;
};

const createGeneratorOne = (arg : ExampleType) => function* (arg: ExampleType) {
    return arg;
};

const createGeneratorTwo = (arg : ExampleType) => async function* (arg: ExampleType) {
    return arg;
};


const obj = {
    objectMethod(arg: ExampleType) {
        return arg;
    }
};


setTimeout(function* replace_name(arg : ExampleType) {
    return arg;
}, 1000);


// Immediately Invoked Function Expression (IIFE)
(function(arg: any) {
    return arg;
})(null);


function* generatorFunction(arg : ExampleType) {
    yield arg;
}


async function* asyncGeneratorFunction(arg : ExampleType) {
    yield arg;
}


async function asyncFunction(arg : ExampleType) {
    return arg;
}


const asyncArrowFunction = async (arg : ExampleType) => {
    return arg;
};


const computedMethodName = 'computedMethod';
const objWithComputedMethod = {
    async * [computedMethodName](arg : ExampleType) {
        return arg;
    }
};


const objBound = {
    x: 42,
    getX: function(arg : number) {
        return this.x * arg;
    }
};

const unboundGetX = objBound.getX;
const boundGetX = unboundGetX.bind(objBound);

const handler = {
    get: function(target: any, prop: any , receiver: any) {
        if (prop === 'dynamicMethod') {
            return function(arg: ExampleType) {
                return arg;
            };
        }
        // @ts-ignore
        return Reflect.get(...arguments);
    }
};

const proxy = new Proxy({}, handler);
proxy.get('dynamicMethod')();


const methodName = 'hi'

class MyClass {
    private arg: ExampleType;
    constructor(arg: ExampleType) {
        this.arg = arg;
    }

    instanceMethod(arg: ExampleType) {
        return arg;
    }

    static staticMethod(arg: ExampleType) {
        return arg;
    }

    async asyncMethod(arg: ExampleType) {
        return arg;
    }

    get value() {
        return this.arg;
    }

    set value(arg: ExampleType) {
        this.arg = arg;
    }

    _privateMethod(arg: ExampleType) {
        return arg;
    }

    publicMethod(arg: ExampleType) {
        return this._privateMethod(arg);
    }

    [methodName](arg: ExampleType) {
        return arg;
    }

    static expressedMethod = async function* (arg: ExampleType) {
        return arg;
    };

    arrowMethod = (arg: ExampleType) => {
        return arg;
    };
}