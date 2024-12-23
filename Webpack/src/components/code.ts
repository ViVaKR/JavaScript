// import '@/scss/styles.scss'
import '@/scss/code.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Person } from '@/models/person';
import { hello, Calculator } from 'js/demo';

class Code {
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

    const btn = document.getElementById('btnAlert');
    btn?.addEventListener('click', () => {
        console.log()
        alert('Hello world!');
    });

});

export { Code };
