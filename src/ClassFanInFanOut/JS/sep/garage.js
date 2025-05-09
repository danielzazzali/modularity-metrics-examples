class Car {
    // Método de instancia
    on() {
        console.log("Llamada a método de instancia: on()");
    }

    // Método estático
    static on() {
        console.log("Llamada a método estático: on()");
    }
}

class Garage {
    constructor() {
        // Llamadas a métodos de instancia
        this.parkedCar = new Car();                 // ✔ Constructor

        this.parkedCar.on();                      // ✔ Desde propiedad

        new Car().on();                            // ✔ ✔ Instancia directa (Constructor and method)


        const myCar = new Car();              // ✔ Constructor
         myCar.on();                              // ✔ Desde variable

        // const ClaseCar = Car;
        // new ClaseCar().on();                       // Clase en variable (low priority)
        //
        // console.log("Usando prototype:");
        // Car.prototype.on.call(new Car());          // Usando prototype (low priority)
        //
        // console.log("Reflect.apply:");
        // Reflect.apply(Car.prototype.on, new Car(), []); // Reflect (low priority)
        //
        // // Llamadas a métodos estáticos
        // console.log("Directo:");
        Car.on();                                  // ✔ Directo

        // console.log("Variable clase:");
        // const type = Car;
        // type.on();                                 // Variable clase (low priority)
        //
        // console.log("Desde constructor:");
        // this.parkedCar.constructor.on();           // Desde constructor (low priority)

        // console.log("Corchetes:");
        Car['on']();                               // ✔ Corchetes (Cuando es un string duro, considerar)

        // console.log("Nombre dinámico:");
        // const metodo = "on";
        // Car[metodo]();                             // Nombre dinámico (low priority)
        //
        // console.log("Destructuración:");
        // const { on } = Car;
        // on.call(Car);                              // Destructuración (low priority)
        //
        // console.log("Operador coma:");
        // (0, Car.on)();                             // Operador coma (low priority)
    }
}

new Garage();
