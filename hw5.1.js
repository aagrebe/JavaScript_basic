'use strict';

/* Задание 1. Создать функцию, генерирующую шахматную доску. 
* Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. 
* Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/

var chess = document.getElementById('chess');

function chessGeneration (table){

	const rows = ['', 8, 7, 6, 5, 4, 3, 2, 1];
	const columns = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

	for (let row=0; row < rows.length; row++){
		const tr = document.createElement ('tr');
		table.appendChild(tr);
		for (let column=0; column < columns.length; column++){
			const td = document.createElement ('td');
			if (row == 0) {
				td.innerHTML = columns[column];
			}
			else if (column == 0) {
				td.innerHTML = rows[row];
			} else if (column % 2 ==0 && row % 2 != 0){
				td.style.backgroundColor = 'black';
			}
			else if (column % 2 !=0 && row % 2 == 0){
				td.style.backgroundColor = 'black';
			}
			tr.appendChild(td);
		}
	}
	return table;
}

console.log(chessGeneration(chess));

// немного сложно, но работает :)