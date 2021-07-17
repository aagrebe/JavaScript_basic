'use strict';

/* Задание 5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. 
* Обязательно использовать оператор return.
*/

function summNumbers(a, b) {
    let summa = a + b;
    return summa;
}

function diffNumbers(a, b) {
    let diff = a - b;
    return diff;
}

function multiNumbers(a, b) {
    let multi = a * b;
    return multi;
}

function divNumbers(a, b) {
    if (b == 0) {
        return 'На ноль делить нельзя!';
    } else {
        let div = a / b;
        return div;
    }
}

const a = parseInt(prompt('Введите первое число: '));
const b = parseInt(prompt('Введите второе число: '));

alert(summNumbers(a, b));
alert(diffNumbers(a, b));
alert(multiNumbers(a, b));
alert(divNumbers(a, b));