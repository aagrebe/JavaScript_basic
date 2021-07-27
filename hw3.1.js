'use strict';

//Задание 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

let number = 0;

function prime(number){ //создаем универсальную функцию для определения числа на простоту
	for (let i = 2; i < number; i++) {
	    if(number % i == 0) return false;
	}
	return number > 1;
}

while (number <= 100) { //через чикл while делаем перебор чисел по функции и выводим только простые
	if (prime(number) != false) console.log(number);
    number++;
}
