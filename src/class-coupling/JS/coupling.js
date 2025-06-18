class Garage {
    constructor() {
        // Llamadas a métodos de instancia
        // this.car = new Car();                 // ✔ Constructor
        //
        // // this.car.start();                      // ✔ Desde propiedad
        //
        new Car().start();                            // ✔ ✔ Instancia directa (Constructor and method)
        //
        // const myCar = new Car();              // ✔ Constructor
        //myCar.start();                              // ✔ Desde variable

        // // Llamadas a métodos estáticos
        // console.log("Directo:");
        Car.start();                                  // ✔ Directo
        Car.start();                                  // ✔ Directo
        Car.start();                                  // ✔ Directo
        Car.start();                                  // ✔ Directo
        Car.start();                                  // ✔ Directo
        Car.start();                                  // ✔ Directo
        Car.start(); // ✔ Directo

        // console.log("Corchetes:");
        //Car['startStatic']();                               // ✔ Corchetes (Cuando es un string duro, considerar)

    }
}

class Car {
    static start() {}
}
