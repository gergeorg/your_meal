import { clearCart } from './cart.js'
import { modalDeliveryBtn, modalDeliveryForm, modalDeliveryTitle } from './elements.js'

export const orderController = (getCart) => {
	const checkDelivery = () => {
		if (modalDeliveryForm.format.value === 'pickup') {
			modalDeliveryForm['address-info'].classList.add('modal-delivery__fieldset-input__hide')
		}

		if (modalDeliveryForm.format.value === 'delivery') {
			modalDeliveryForm['address-info'].classList.remove('modal-delivery__fieldset-input__hide')
		}
	}

	modalDeliveryForm.addEventListener('change', checkDelivery)

	modalDeliveryForm.addEventListener('submit', (e) => {
		e.preventDefault()

		const formData = new FormData(modalDeliveryForm)

		const data = Object.fromEntries(formData)
		data.order = getCart()
		console.log('data: ', data)

		fetch('https://reqres.in/api/users', {
			method: 'POST',
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((res) => {
				clearCart()
				modalDeliveryTitle.textContent = `Ваш номер заказа ${res.id}`
				modalDeliveryForm.innerHTML = '<h2>Спасибо за заказ!</h2>'
				modalDeliveryBtn.style.display = 'none'

				// modalDeliveryForm.reset()
				// checkDelivery()
			})
	})
}
