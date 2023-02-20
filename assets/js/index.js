const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
      navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
      })
}

if (navClose) {
      navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
      })
}
/* ------------------ CHANGE BACKGROUND HEADER */
const scrollHeader = () => {
      const header = document.getElementById('header')
      // When the scroll is greater than 50 viewport height, add the scroll-header classList
      this.scrollY >= 50 ? header.classList.add('bg-header')
                                : header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader)

/* ------------------ SHOW SCROLL UP */
const scrollUp = () => {
      const scrollUp = document.getElementById('scroll-up')

      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                 : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/* ------------------ SCROLL SECTION ACTIVE-LINK */
const sections =document.querySelectorAll('section[id]')

const scrollActive = () => {
      const scrollY = window.pageYOffset

      sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                        sectionTop =current.offsetTop - 58,
                        sectionId = current.getAttribute('id'),
                        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                  sectionsClass.classList.add('active-link')
            } else {
                  sectionsClass.classList.remove('active-link')
            }
      })
}

/* ------------------ DARK LIGHT THEME */

const  themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
      // If the validation is fulfilled, we ask what the issue was to know if we actived or deactivated the dark
      document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
      themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}
// Activate / deactivated the theme  manually with the button
themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      // We save the theme and the current icon that the user choose
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
})

/* ------------------ SCROLL REVEAL ANIMATION */
const sr = ScrollReveal ({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
      // reset: true, //Animations repeat
})

sr.reveal(`.home__img, .newsletter__container, .footer__logo, .footer__description, .footer__content, footer__info`)
sr.reveal(`.home__data`, {origin: 'bottom'})
sr.reveal(`.about__data, recently__data`, {origin: 'left'})
sr.reveal(`.about__img, recently__img`, {origin: 'right'})
sr.reveal(`.popular__card`, {interval: 100})
