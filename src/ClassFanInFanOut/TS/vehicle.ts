export class Car {
    private engine: Engine;

    constructor() {
        this.engine = new Engine('HEMI', 395);
    }

    start(): void {
        this.engine.ignite();
    }

    testEngine(): void {
        const engine: Engine = new Engine('HEMI', 395);
        engine.ignite();
    }
}

class Engine {
    private name: string;
    private power: number;

    constructor(name: string, power: number) {
        this.name = name;
        this.power = power
    }

    ignite(): void {}
}