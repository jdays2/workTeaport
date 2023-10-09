//глобальный select.
const selectFathers = document.querySelectorAll('.select');

const setSelects = () => {
	if (selectFathers) {
		selectFathers.forEach((select) => {
			const childs = select.querySelectorAll('.select-item');

			childs.forEach((current) => {
				current.addEventListener('click', () => {
					childs.forEach((item) => {
						if (current === item) {
							current.classList.add(activeClass);
						} else {
							item.classList.remove(activeClass);
						}
					});
				});
			});
		});
	}
};

document.addEventListener('DOMContentLoaded', setSelects);
