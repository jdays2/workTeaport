const heroSlider = new Swiper('.hero-slider__box', {
	direction: 'vertical',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

//bullets logic
// const bullets = document.querySelectorAll('.swiper-pagination-bullet');
// const bulletsWrapper = document.querySelector('.swiper-pagination');

// const createElem = (type, className, content = '') => {
// 	const element = document.createElement(type);
// 	element.classList.add(className);
// 	element.innerHTML = content;
// 	return element;
// };

// const divElement = document.createElement('div');
// divElement.classList.add('bullets-display');

// const spanElement = document.createElement('span');
// spanElement.classList.add('bullets-display__index');

// divElement.appendChild(spanElement);

// const setParams = (count, active) => {
// 	const divHeight = divElement.offsetHeight;
// 	const spanHeight = divHeight / count;
// 	const offset = spanHeight * active;

// 	spanElement.style.height = `${spanHeight}px`;
// 	spanElement.style.transform = `translateY(${offset}px)`;
// };

// const showIndicator = () => {
// 	const parentElement = document.querySelector(
// 		'.swiper-pagination-bullet-active',
// 	);
// 	parentElement.appendChild(divElement);

// 	setParams(bullets.length - 1, 0); // Показываем индикатор для предпоследнего элемента
// };

// // Вызываем функцию при загрузке страницы
// window.addEventListener('DOMContentLoaded', showIndicator);

// heroSlider.on('transitionEnd', () => {
// 	const activeIndex = heroSlider.activeIndex;
// 	const parentElement = document.querySelector(
// 		'.swiper-pagination-bullet-active',
// 	);

// 	// Проверяем, есть ли уже div на данном элементе
// 	const existingDiv = parentElement.querySelector('.bullets-display');
// 	if (existingDiv) {
// 		setParams(bullets.length - 1, activeIndex); // Обновляем параметры индикатора для активного элемента
// 		return; // Если div уже существует, выходим из функции
// 	}

// 	parentElement.appendChild(divElement);

// 	// Проверяем, является ли активный индекс последним
// 	if (activeIndex === bullets.length - 1) {
// 		setParams(bullets.length - 1, activeIndex - 1); // Устанавливаем предпоследний индекс для последнего элемента
// 	} else {
// 		setParams(bullets.length - 1, activeIndex); // Устанавливаем активный индекс для остальных элементов
// 	}
// });

// bullets.forEach((element, idCurrent) => {
// 	element.innerHTML = idCurrent + 1;
// 	element.addEventListener('click', () => {
// 		const parentElement = document.querySelector(
// 			'.swiper-pagination-bullet-active',
// 		);

// 		// Проверяем, есть ли уже div на данном элементе
// 		const existingDiv = parentElement.querySelector('.bullets-display');
// 		if (existingDiv) {
// 			return; // Если div уже существует, выходим из функции
// 		}

// 		// Проверяем, является ли кликнутый индекс последним
// 		if (idCurrent === bullets.length - 1) {
// 			setParams(bullets.length - 1, idCurrent - 1); // Устанавливаем предпоследний индекс для последнего элемента
// 		} else {
// 			setParams(bullets.length - 1, idCurrent); // Устанавливаем кликнутый индекс для остальных элементов
// 		}

// 		heroSlider.slideTo(idCurrent); // Переключаем слайдер на кликнутый элемент
// 	});
// });

const moodSlider = new Swiper('.mood-slider', {
	speed: 800,
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const popularSlider = new Swiper('.popular-slider', {
	speed: 800,
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const countrySlider = new Swiper('.country-slider', {
	speed: 800,
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});