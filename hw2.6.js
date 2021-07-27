'use strict';

/* Задание 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
* где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
* В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) 
* и вернуть полученное значение (применить switch).
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

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': alert(summNumbers(arg1, arg2)); break;
        case '-': alert(diffNumbers(arg1, arg2)); break;
        case '*': alert(multiNumbers(arg1, arg2)); break;
        case '/': alert(divNumbers(arg1, arg2)); break;
        default: null;
    }
}

let a = parseInt(prompt('Введите первое число: '));
let b = parseInt(prompt('Введите второе число: '));
let c = prompt('Введите знак операции (+, -, *, /): ');
if (mathOperation(a, b, c) != null) mathOperation(a, b, c);
else alert('Неверно введен знак!'); // не понимаю, почему у меня здесь во всех случаях выводит дефолтное значение
