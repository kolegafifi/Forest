const burgerIcon = document.querySelector('.nav-mobile__burger')
const sideNav = document.querySelector('.side-nav')
const sideNavItems = document.querySelectorAll('.item')
const sections = document.querySelectorAll('.section')
const navLinks = document.querySelectorAll('.nav-desktop__item')
burgerIcon.addEventListener('click', () => {
	sideNav.classList.toggle('show')
})
sideNavItems.forEach(item => {
	item.addEventListener('click', () => {
		sideNav.classList.remove('show')
	})
})
document.addEventListener('DOMContentLoaded', () => {
	const handleSections = () => {
		if (window.scrollY >= 0 && window.scrollY <= 400) {
			navLinks[0].classList.add('active')
			navLinks[1].classList.remove('active')
			navLinks[2].classList.remove('active')
		} else if (window.scrollY >= 384 && window.scrollY <= 700) {
			navLinks[0].classList.remove('active')
			navLinks[2].classList.remove('active')
			navLinks[1].classList.add('active')
		} else {
			navLinks[0].classList.remove('active')
			navLinks[2].classList.add('active')
			navLinks[1].classList.remove('active')
		}
	}
	window.addEventListener('scroll', handleSections)
})
