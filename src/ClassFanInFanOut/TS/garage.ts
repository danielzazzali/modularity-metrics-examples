import { Car } from './vehicle';

export class Garage {
    private parkedCar: Car;

    constructor() {
        this.parkedCar = new Car();
    }

    operate(): void {
        this.parkedCar.start();
    }
}