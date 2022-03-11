const btn = document.querySelector('.btn-light');
const btns = document.querySelectorAll('.btn');

let light = false;

const lightKeyboard = () => {
	if (light === false) {
		console.log('glow on');
		btns.forEach(el => {
			el.classList.add('keyboard-light');
		});
		return (light = true);
	} else {
		console.log('glow off');
		btns.forEach(el => {
			el.classList.remove('keyboard-light');
		});
		return (light = false);
	}
};

btn.addEventListener('click', lightKeyboard);
