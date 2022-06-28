/** @format */
const buttons = document.querySelectorAll('input');

const scren = document.querySelector('h1');

const operateurs = ['-', '+', '/', '*'];

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		scren.textContent += e.target.value;
	});
});

equal.addEventListener('click', () => {
	scren.textContent = eval(scren.textContent);
});

clear.addEventListener('click', () => {
	scren.textContent = '';
});

const result = (operation) => {};
