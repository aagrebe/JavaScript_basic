'use strict';

/* Задание 2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
* Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
* Пустая корзина должна выводить строку «Корзина пуста»;
* Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

var basket = document.getElementById('basket');


const myBasket = {
         products: [ 
         	// {	
         	// name: 'Сковорода',
         	// quantity: 2,
         	// price: 899
         	// },
         	// {	
         	// name: 'Кастрюля',
         	// quantity: 1,
         	// price: 599
         	// },
         	// {	
         	// name: 'Крышка',
         	// quantity: 3,
         	// price: 299
         	// }, 
         	// {	
         	// name: 'Половник',
         	// quantity: 1,
         	// price: 199
         	// } 
         ],
         productsPrice (){
         	let count = 0;
         	for (let i = 0; i < this.products.length; i++) {
         		count += this.products[i]['quantity'] * this.products[i]['price'];
         	}
         	return count;
         }
 };

if (myBasket.productsPrice() > 0) {
   basket.innerHTML = 'В корзине: ' + myBasket.products.length + ' товаров на сумму ' + myBasket.productsPrice() + ' рублей';
} else basket.innerHTML ='Корзина пуста';

// здесь не совсем поняла, нужны ли карточки товаров

