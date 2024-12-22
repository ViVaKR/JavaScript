export function hello(name) {
    return `Hello, ${name}! Fine Thanks and you?`;
}

export class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        console.log('Calculator initialized with values:', a, b);
    }

    add() {
        return this.a + this.b;
    }

    sub() {
        return this.a - this.b;
    }

    mul() {
        return this.a * this.b;
    }

    div() {
        if (this.b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return this.a / this.b;
    }
}
