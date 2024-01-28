const body = document.body;
const menu = document.querySelector('.menu');
const menuTogleBtn = document.querySelector('.menu-btn');
const menuTogleBtnLines = [...document.querySelectorAll('.menu-btn__line')];

body.addEventListener('click', e => {
	if (body.clientWidth <= 480) {
		const target = e.target;
		if (target === menuTogleBtn || target.classList.contains('menu-btn__line')) {
			body.classList.toggle('menu-is-open');
		} else {
			body.classList.remove('menu-is-open');
		}
		toggleMenu();

	}
});

function toggleMenu() {
	if (body.classList.contains('menu-is-open')) {
		menu.style.opacity = 1;
		menu.style.visibility = 'visible';
		menuTogleBtnLines.forEach(line => {
			line.classList.add('menu-btn__line--open');
		});
	} else {
		menu.style.opacity = 0;
		menu.style.visibility = 'hidden';
		menuTogleBtnLines.forEach(line => {
			line.classList.remove('menu-btn__line--open');
		});
	}
}
