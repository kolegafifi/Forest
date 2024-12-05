const burgerIcon = document.querySelector('.nav-mobile__burger')
const sideNav = document.querySelector('.side-nav')
const sideNavItems = document.querySelectorAll('.item')
const formButton = document.querySelector('.form-button')
const formError = document.querySelector('.form-error')
const emailInput = document.querySelector('#email')
const nameInput = document.querySelector('#name')
const surnameInput = document.querySelector('#surname')
const textarea = document.querySelector('.textarea-input')
burgerIcon.addEventListener('click', () => {
	sideNav.classList.toggle('show')
})
sideNavItems.forEach(item => {
	item.addEventListener('click', () => {
		sideNav.classList.remove('show')
	})
})
const checkMail = () => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if (re.test(emailInput.value)) {
		formError.style.visibility = 'hidden'
		formError.textContent = ''
	} else {
		formError.style.visibility = 'visible'
		formError.textContent = 'E-mail jest niepoprawny'
	}
}
const checkMessage = () => {
	if (textarea.value.length > 15) {
		formError.style.visibility = 'hidden'
		formError.textContent = ''
		checkMail()
	} else {
		formError.style.visibility = 'visible'
		formError.textContent = 'Wiadomość powinna zawierać conajmniej 15 znaków'
	}
}
formButton.addEventListener('click', event => {
	event.preventDefault()
	checkMail()
	checkMessage()
})
