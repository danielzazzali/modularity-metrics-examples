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
        this.parkedCar = new Car();
        console.log("Desde propiedad:");
        this.parkedCar.on();                      // ✔ Desde propiedad

        // console.log("Instancia directa:");
        // new Car().on();                            // ✔ Instancia directa

        // console.log("Desde variable:");
        // const myCar = new Car();
        // myCar.on();                              // Desde variable
        //
        // console.log("Clase en variable:");
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
        // Car.on();                                  // Directo

        // console.log("Variable clase:");
        // const type = Car;
        // type.on();                                 // Variable clase (low priority)
        //
        // console.log("Desde constructor:");
        // this.parkedCar.constructor.on();           // Desde constructor (low priority)

        // console.log("Corchetes:");
        // Car['on']();                               // Corchetes (Cuando es un string duro, considerar)

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
