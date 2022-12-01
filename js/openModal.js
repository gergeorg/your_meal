import {
	modalProduct,
	modalProductTitle,
	modalProductImage,
	modalProductDescription,
	ingredientsList,
	ingredientsCalories,
	modalProductPriceCount,
} from './elements.js'

export const openModal = (product) => {
	modalProductTitle.textContent = product.title
	modalProductImage.textContent = product.image
	ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`
	modalProductDescription.textContent = product.description
	modalProductPriceCount.textContent = product.price
	ingredientsList.textContent = ''

	const ingredientsListItem = product.ingredients.map((item) => {
		const li = document.createElement('li')
		li.classList.add('ingredients__item')
		li.textContent = item
		return li
	})

	ingredientsList.append(...ingredientsListItem)

	modalProduct.classList.add('modal_open')
}
