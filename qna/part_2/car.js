class Car {
    constructor() {
        this.speed = 0;
    }

    speedUp() {
        this.speed += 1;
    }

    speedDown() {
        this.speed -= 1;
    }

    getSpeed() {
        return this.speed;
    }
}
