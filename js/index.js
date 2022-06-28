/** @format */
const buttons = document.querySelectorAll('input');

const scren = document.querySelector('h1');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		scren.textContent += e.target.value;
	});
});

equal.addEventListener('click', () => {
	scren.textContent = result(scren.textContent);
});

clear.addEventListener('click', () => {
	scren.textContent = '';
});

const result = (str) => {
	return Function(`return ${str}`)();
};
