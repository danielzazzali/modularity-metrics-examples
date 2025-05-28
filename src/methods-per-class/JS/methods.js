class MyClass {
    // Instance method
    instanceMethod() {}

    // Static method
    static staticMethod() {}

    // Method with string literal as name
    ['stringLiteral']() {}

    // Async instance method
    async asyncMethod() {}

    // Static async method
    static async staticAsyncMethod() {}

    // Generator instance method
    *generatorMethod() {}

    // Static generator method
    static *staticGeneratorMethod() {}

    // Async generator (async iterator) instance method
    async *asyncGeneratorMethod() {}

    // Numeric literal method name
    '123'() {}

    // Computed property name with template expression
    [ `computed_${'Name'}` ]() {}

    // Private instance method
    #privateMethod() {}

    // Private static method
    static #privateStaticMethod() {}

    // Private getter
    get #secret() {}

    // Private setter
    set #secret(v) {}

    // Getter method
    get value() {}

    // Setter method
    set value(v) {}

    // Arrow function as public class field
    arrowMethod = () => {};

    // Named function expression as class field
    fieldFunction = function namedFn() {};

    // Static arrow function as class field
    static staticArrow = () => {};

    // Static named function expression as class field
    static staticFieldFunction = function namedStaticFn() {};
}

function computeKey() {

}

class C {
    // 1. Bloque estático (StaticBlock) — siempre se filtra
    static {
        console.log('inicialización');
    }

    // 2. Miembro computado con clave NO literal — se descarta porque la key no es StringLiteral/NumericLiteral
    [Symbol.iterator]() {
        // ...
    }

    // 3. Miembro computado con expresión dinámica — tampoco se guarda
    ['computeKey']() {
        // ...
    }

    // 6. Propiedad estática computada sin literal — se filtra igual que en (2)
    static [dynamicName] = 123;
}