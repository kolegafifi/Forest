const burgerIcon = document.querySelector('.nav-mobile__burger')
const sideNav = document.querySelector('.side-nav')
const sideNavItems = document.querySelectorAll('.item')
burgerIcon.addEventListener('click', () => {
    sideNav.classList.toggle('show')
})
sideNavItems.forEach(item => {
    item.addEventListener('click', () => {
        sideNav.classList.remove('show')
    })
})
