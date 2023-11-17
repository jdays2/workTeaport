//select с заменой содержимого

const changeSelectBtns = document.querySelectorAll('.select-change');

const setChangeSelect = () => {
	if (changeSelectBtns) {
		changeSelectBtns.forEach((item) => {
			const value = item.querySelector('.select-value');
			const targets = item.querySelectorAll('.select-target');

			targets.forEach((target) =>
				target.addEventListener('click', () => {
					value.textContent = target.textContent;
					targets.forEach((t) => {
						t.classList.remove('active');
						target.classList.add('active');
					});
				}),
			);
		});
	}
};

document.addEventListener('DOMContentLoaded', setChangeSelect);
