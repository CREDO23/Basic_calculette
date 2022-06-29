/** @format */

//------------Déclaration des tous les buttons---------//

const buttons = document.querySelectorAll('input');

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		scren.textContent += e.target.value;
		sizeFont();
	});
});

//----------- Déclaration de l'ecran-----------//

const scren = document.querySelector('h1');

// -----------Déclaration du motif de l'operation-----------//

const regex = /^[\()\*\/\-%.+0-9]{1,10}$/;

// --------Fonction permettant de suppimer les Zero inutiles au debut de l'operation-----//

const trimZero = (str) => {
	while (str[0] == '0' && /[0-9]/.test(str[1])) {
		str = str.slice(1);
	}
	return str;
};

// ------Fonction permettant de reduire le font-size---------//

const sizeFont = () => {
	if (scren.textContent.length > 10) {
		scren.classList.add('mediumSize');
	} else {
		scren.classList.remove('mediumSize');
	}
};

// ----Fonction permettant d'effacer tout ce qui est à l'ecran-------//

clearButton.addEventListener('click', () => {
	scren.textContent = '';
});

// -------Fonction permettant à effacer progressiveent-------//

deleteButton.addEventListener('click', () => {
	sizeFont();
	scren.textContent = scren.textContent.slice(0, -1);
});

// ------Fonction permettant à faire le calcul-------//

const result = (str) => {
	let x = trimZero(str);
	if (regex.test(x)) {
		return eval(x);
	} else {
		console.log('ola');
	}
};

// -----Efffectuer et afficher--------//

equalButton.addEventListener('click', () => {
	try {
		scren.textContent = parseFloat(result(scren.textContent));
		sizeFont();
	} catch (e) {
		scren.textContent = 'NaN';
	}
});
