console.log('Hello');

let mainArea = document.querySelector('.mainContent');
let rowsAndColumns = prompt('How many rows and columns do you want for your board?');
let square = document.querySelector('.square');

function createDivs(rowsAndColumns) {
	mainArea.style.gridTemplateColumns = `repeat(${rowsAndColumns}, 40px)`;
	mainArea.style.gridTemplateRows = `repeat(${rowsAndColumns}, 40px)`;

	for (let i = 0; i < rowsAndColumns * rowsAndColumns; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		mainArea.appendChild(square);
	}
}

let selector = document.querySelector('.mainContent');
let clear = document.querySelector('#clear');
let change = document.querySelector('#change');

let colorBoard = selector.addEventListener('mouseover', function(event) {
	event.target.style.backgroundColor = 'blue';
	console.log(event);
});

let itemsList = document.querySelectorAll('.square');
itemsList.forEach((item) => {
	item.addEventListener('mouseover', () => {
		colorBoard(event);
	});
});

let clearBoard = clear.addEventListener('click', function() {
	let cells = document.querySelectorAll('.square');
	console.log(clear);
	cells.forEach((square) => {
		square.style.backgroundColor = 'white';
	});
});

let changeBoardSize = change.addEventListener('click', function() {
	window.location.reload();
});

createDivs(rowsAndColumns);
