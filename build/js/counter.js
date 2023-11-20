const counters = document.querySelectorAll('.counter');

if (counters) {
	counters.forEach((wrapper) => {
		const value = wrapper.querySelector('.counter__value span');
		const minus = wrapper.querySelector('.counter__decrease');
		const plus = wrapper.querySelector('.counter__increase');

		minus.addEventListener('click', () => {
			const valueInner = Number(value.textContent);
			if (!!valueInner) {
				value.textContent--;
			}
		});

		plus.addEventListener('click', () => {
			value.textContent++;
		});
	});
}
