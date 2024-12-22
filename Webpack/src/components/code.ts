import { Person } from '@/models/person';
import { hello, Calculator } from 'js/demo';

export class Code {
    constructor() {
        console.log('Demo: ', hello('world'));

        let calc = new Calculator(123, 65);
        console.log('Sum: ', calc.add());
        console.log('Sub: ', calc.sub());
        console.log('Mul: ', calc.mul());
        console.log('Div: ', calc.div());
    }

    public greet(): void {
        let person = new Person('John', 30);
        console.log(person.greet());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const code = new Code();
    code.greet();

});
