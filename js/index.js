/** @format */
const buttons = document.querySelectorAll('input');

const scren = document.querySelector('h1');

const regex = /^[\()\*\/\-%.+0-9]{1,10}$/;

const trimZero = (param) => {
	let str = param;
	while (str[0] == '0' && /[0-9]/.test(str[1])) {
		str = str.slice(1);
	}
	return str;
};

const sizeFont = () => {
	if (scren.textContent.length > 10) {
		scren.classList.add('mediumSize');
	} else {
		scren.classList.remove('mediumSize');
	}
};

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		scren.textContent += e.target.value;
		sizeFont();
	});
});

clear.addEventListener('click', () => {
	scren.textContent = '';
});

const result = (str) => {
	let x = trimZero(str);
	if (regex.test(x)) {
		return eval(x);
	}
};

equal.addEventListener('click', () => {
	try {
		scren.textContent = parseFloat(result(scren.textContent));
		sizeFont();
	} catch (e) {
		scren.textContent = 'NaN';
	}
});

del.addEventListener('click', () => {
	sizeFont();
	scren.textContent = scren.textContent.slice(0, -1);
});
