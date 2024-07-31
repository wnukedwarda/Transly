const navMobile = document.querySelector('.nav__mobile')
const navBtn = document.querySelector('.hamburger')
// const footerYear = document.querySelector('.footer__year')
const navLinks = document.querySelectorAll('.nav__links')
// const footer = document.querySelector('.footer')

// const handleCurrentYear = () => {
// 	const year = new Date().getFullYear()
// 	footerYear.innerText = year
// }

const handleHamburger = () => {
	navBtn.classList.toggle('is-active')
	navMobile.classList.toggle('nav__mobile--active')
    // footer.classList.toggle('footer__hidden')
    

    navLinks.forEach(link => {
		link.addEventListener('click', () => {
			navMobile.classList.remove('nav__mobile--active')
            navBtn.classList.remove('is-active')
            // footer.classList.toggle('footer__hidden')
		})
	})
}



navBtn.addEventListener('click', handleHamburger)
// handleCurrentYear()