const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', navToggle);

function navToggle() {
	menuBtn.classList.toggle('open');
	menu.classList.toggle('flex');
	menu.classList.toggle('hidden');
	scrollToggle();
}

function scrollToggle() {
	window.scrollTo({
		top: 0,
	});
	document.body.classList.toggle('overflow-hidden');
}