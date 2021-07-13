function dynamics() {
	const parent_original = document.querySelector('.item-arrow');
	const parent = document.querySelector('.for-item1');
	const item = document.querySelector('.header-item5 ');

	//Слушаем изменение размера экрана
	window.addEventListener('resize', move);

	//Функция
	function move() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (viewport_width <= 1180) {
			if (!item.classList.contains('done')) {
				parent.insertBefore(item, parent.children[2]);
				item.classList.add('done');
			}
		} else {
			if (item.classList.contains('done')) {
				parent_original.insertBefore(item, parent_original.children[2]);
				item.classList.remove('done');
			}
		}
	}

	//Вызываем функцию
	move();
}

//====================================================================================================

function dynamics1() {
	const parent_original = document.querySelector('.item-arrow');
	const parent = document.querySelector('.for-item2');
	const item = document.querySelector('.header-item4');


	window.addEventListener('resize', move);


	function move() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (viewport_width <= 1180) {
			if (!item.classList.contains('done')) {
				parent.insertBefore(item, parent.children[2]);
				item.classList.add('done');
			}
		} else {
			if (item.classList.contains('done')) {
				parent_original.insertBefore(item, parent_original.children[2]);
				item.classList.remove('done');
			}
		}
	}


	move();
}

function dynamics2() {
	const parent_original = document.querySelector('.item-arrow');
	const parent = document.querySelector('.for-item3');
	const item = document.querySelector('.header-item3');


	window.addEventListener('resize', move);


	function move() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (viewport_width <= 1080) {
			if (!item.classList.contains('done')) {
				parent.insertBefore(item, parent.children[2]);
				item.classList.add('done');
			}
		} else {
			if (item.classList.contains('done')) {
				parent_original.insertBefore(item, parent_original.children[2]);
				item.classList.remove('done');
			}
		}
	}


	move();
}

function dynamics3() {
	const parent_original = document.querySelector('.item-arrow');
	const parent = document.querySelector('.for-item4');
	const item = document.querySelector('.header-item2');


	window.addEventListener('resize', move);


	function move() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (viewport_width <= 925) {
			if (!item.classList.contains('done')) {
				parent.insertBefore(item, parent.children[2]);
				item.classList.add('done');
			}
		} else {
			if (item.classList.contains('done')) {
				parent_original.insertBefore(item, parent_original.children[2]);
				item.classList.remove('done');
			}
		}
	}


	move();
}

function dynamics4() {
	const parent_original = document.querySelector('.header__surface');
	const parent = document.querySelector('.surface-bottom');
	const item = document.querySelector('.surface-header ');


	window.addEventListener('resize', move);


	function move() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (viewport_width <= 860) {
			if (!item.classList.contains('done')) {
				parent.insertBefore(item, parent.children[2]);
				item.classList.add('done');
			}
		} else {
			if (item.classList.contains('done')) {
				parent_original.insertBefore(item, parent_original.children[2]);
				item.classList.remove('done');
			}
		}
	}


	move();
}

function dynamics5() {
	const parent_original = document.querySelector('.header__search');
	const parent = document.querySelector('.header-search-mobile');
	const item = document.querySelector('.search-header');


	window.addEventListener('resize', move);


	function move() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (viewport_width <= 860) {
			if (!item.classList.contains('done')) {
				parent.insertBefore(item, parent.children[2]);
				item.classList.add('done');
			}
		} else {
			if (item.classList.contains('done')) {
				parent_original.insertBefore(item, parent_original.children[2]);
				item.classList.remove('done');
			}
		}
	}


	move();
}

function dynamics6() {
	const parent_original = document.querySelector('.header__item');
	const parent = document.querySelector('.for-item');
	const item = document.querySelector('.item-microsoft');


	window.addEventListener('resize', move);


	function move() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (viewport_width <= 860) {
			if (!item.classList.contains('done')) {
				parent.insertBefore(item, parent.children[2]);
				item.classList.add('done');
			}
		} else {
			if (item.classList.contains('done')) {
				parent_original.insertBefore(item, parent_original.children[2]);
				item.classList.remove('done');
			}
		}
	}


	move();
}

function dynamics7() {
	const parent_original = document.querySelector('.header__item');
	const parent = document.querySelector('.for-item6');
	const item = document.querySelector('.header-item1');


	window.addEventListener('resize', move);


	function move() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (viewport_width <= 860) {
			if (!item.classList.contains('done')) {
				parent.insertBefore(item, parent.children[2]);
				item.classList.add('done');
			}
		} else {
			if (item.classList.contains('done')) {
				parent_original.insertBefore(item, parent_original.children[2]);
				item.classList.remove('done');
			}
		}
	}


	move();
}

dynamics();
dynamics1();
dynamics2();
dynamics3();
dynamics4();
dynamics5();
dynamics6();
dynamics7();



let burgerBtn = document.querySelector('.header__burger');
let burgerActive = document.querySelector('.menu-header');
let more = document.querySelector('.item-more');


burgerBtn.addEventListener("click", function (e) {
	burgerBtn.classList.toggle('active');
	burgerActive.classList.toggle('active');
});
more.addEventListener("click", function (e) {
	burgerActive.classList.toggle('active');
	more.classList.toggle('active');
});


