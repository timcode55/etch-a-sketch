let mainArea = document.querySelector('.mainContent');
let rowsAndColumns = prompt('How many rows and columns do you want for your board?');
let square = document.querySelector('.square');

// Create Board Grid
function createDivs(rowsAndColumns) {
	mainArea.style.gridTemplateColumns = `repeat(${rowsAndColumns}, 40px)`;
	mainArea.style.gridTemplateRows = `repeat(${rowsAndColumns}, 40px)`;

	for (let i = 0; i < rowsAndColumns * rowsAndColumns; i++) {
		const square = document.createElement('div');
		square.classList.add('square');
		mainArea.appendChild(square);

		// create Random color function to color board
		function random_rgba() {
			var o = Math.round;
			var r = Math.random;
			var s = 255;
			return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 1 + ')';
		}

		let colorBoard = square.addEventListener('mouseover', function(event) {
			event.target.style.backgroundColor = random_rgba();
		});
	}
}
let selector = document.querySelector('.mainContent');
let clear = document.querySelector('#clear');
let change = document.querySelector('#change');

// Clear the board
let clearBoard = clear.addEventListener('click', function() {
	let cells = document.querySelectorAll('.square');
	cells.forEach((square) => {
		square.style.backgroundColor = 'white';
	});
});

//Get user input to change the board size
let changeBoardSize = change.addEventListener('click', function() {
	window.location.reload();
});

createDivs(rowsAndColumns);
