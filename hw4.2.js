'use strict';

/* Задание 2. Продолжить работу с интернет-магазином:
* В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
* Реализуйте такие объекты. Перенести функционал подсчета корзины на объектно-ориентированную базу.
*/

const basket = {
        products: [ 
        	{	
        	name: 'Сковорода',
        	quantity: 2,
        	price: 899
        	},
        	{	
        	name: 'Кастрюля',
        	quantity: 1,
        	price: 599
        	},
        	{	
        	name: 'Крышка',
        	quantity: 3,
        	price: 299
        	}, 
        	{	
        	name: 'Половник',
        	quantity: 1,
        	price: 199
        	} 
        ],
        productsPrice (){
        	let count = 0;
        	for (let i = 0; i < this.products.length; i++) {
        		count += this.products[i]['quantity'] * this.products[i]['price'];
        	}
        	return count;
        }
};

 const keys = Object.keys(basket);
 for (let i = 0; i < keys.length; i++) {
 	console.log(basket[keys[i]]);
 }

 console.log(basket.productsPrice()); //3493
