import { catalogList, modalProduct } from './elements.js'

import { navigationListController } from './navigationListController.js'
import { openModal } from './openModal.js'
import { renderListProduct } from './renderListProduct.js'

const testProduct = {
	title: 'Тест бургер',
	price: 555555,
	weight: 4444,
	calories: 9999999999,
	description:
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem quaerat laborum distinctio, pariatur doloremque neque molestiae. Numquam ipsam debitis eveniet, facilis nam quod? Atque placeat dolorum doloribus explicabo corrupti!',
	image: 'img/burger5.jpg',
	ingredients: ['Пшеничная булочка', 'Котлета из говядины', 'Красный лук', 'Листья салата', 'Соус сорчичный'],
}

catalogList.addEventListener('click', (e) => {
	const target = e.target

	if (target.closest('.product__detail') || target.closest('.product__image')) {
		openModal(testProduct)
	}
})

modalProduct.addEventListener('click', (e) => {
	const target = e.target

	if (target.closest('.modal__close') || target === modalProduct) {
		modalProduct.classList.remove('modal_open')
	}
})

const init = () => {
	renderListProduct()
	navigationListController()
}

init()
