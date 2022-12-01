const catalogList = document.querySelector(".catalog__list")
const modalProduct = document.querySelector(".modal_product")
const modalProductTitle = document.querySelector(".modal-product__title")
const modalProductImage = document.querySelector(".modal-product__image")
const modalProductDescription = document.querySelector(
	".modal-product__description"
)
const ingredientsList = document.querySelector(".ingredients__list")
const ingredientsCalories = document.querySelector(".ingredients__calories")
const modalProductPriceCount = document.querySelector(
	".modal-product__price-count"
)

const product = {
	title: "Тест бургер",
	price: 555555,
	weight: 4444,
	calories: 9999999999,
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolorem quaerat laborum distinctio, pariatur doloremque neque molestiae. Numquam ipsam debitis eveniet, facilis nam quod? Atque placeat dolorum doloribus explicabo corrupti!",
	image: "img/burger5.jpg",
	ingredients: [
		"Пшеничная булочка",
		"Котлета из говядины",
		"Красный лук",
		"Листья салата",
		"Соус сорчичный",
	],
}

modalProductTitle.textContent = product.title
modalProductImage.textContent = product.image
ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`
modalProductDescription.textContent = product.description
modalProductPriceCount.textContent = product.price

ingredientsList.textContent = ""

const ingredientsListItem = product.ingredients.map((item) => {
	const li = document.createElement("li")
	li.classList.add("ingredients__item")
	li.textContent = item
	return li
})

ingredientsList.append(...ingredientsListItem)

catalogList.addEventListener("click", (e) => {
	const target = e.target

	if (target.closest(".product__detail") || target.closest(".product__image")) {
		modalProduct.classList.add("modal_open")
	}
})

modalProduct.addEventListener("click", (e) => {
	const target = e.target

	if (target.closest(".modal__close") || target === modalProduct) {
		modalProduct.classList.remove("modal_open")
	}
})
