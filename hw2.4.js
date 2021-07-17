'use strict';

/* Задание 4. Присвоить переменной а значение в промежутке [0..15]. 
* С помощью оператора switch организовать вывод чисел от a до 15.
*/

var number = 0;

function ouputNumbers(number) {
    switch (number) {
    	case 0: alert(number++); 
    	case 1: alert(number++); 
    	case 2: alert(number++);
    	case 3: alert(number++);
    	case 4: alert(number++);
    	case 5: alert(number++); 
    	case 6: alert(number++); 
    	case 7: alert(number++);
    	case 8: alert(number++);
    	case 9: alert(number++);
    	case 10: alert(number++); 
    	case 11: alert(number++); 
    	case 12: alert(number++);
    	case 13: alert(number++);
    	case 14: alert(number++);
    	case 15: alert(number); break;
    }
}

ouputNumbers(number);
