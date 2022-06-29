/** @format */
const buttons = document.querySelectorAll('input');

const scren = document.querySelector('h1');

const regex = /^[\()\*\/\%-+0-9]{1,10}$/;

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		scren.textContent += e.target.value;
	});
});

clear.addEventListener('click', () => {
	scren.textContent = '';
});

const result = (str) => {
	if (regex.test(str)) {
		return Function(`return ${str}`)();
	}
};

equal.addEventListener('click', () => {
	scren.textContent = isNaN(result(scren.textContent))
		? 'Nan'
		: result(scren.textContent);
});
