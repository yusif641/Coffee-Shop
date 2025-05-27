const menu = document.querySelectorAll('.menu-header__link')
const sections = document.querySelectorAll('section')
const iconMenu = document.querySelector('.icon-menu')
const body = document.querySelector('body')
const headerMenu = document.querySelector('.header__menu')

iconMenu.addEventListener('click', (e) => {
    body.classList.toggle('_active')
    iconMenu.classList.toggle('_active')
    headerMenu.classList.toggle('_active')
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            menu.forEach((link) => {
                if (link.getAttribute('href').replace('#', '') === entry.target.id) {
                    link.classList.add('active')
                } else {
                    link.classList.remove('active')
                }
            })
        }
    })
}, {
    threshold: 0.7
})

sections.forEach(
    (section) => observer.observe(section)
)

menu.forEach((e, i, a) => {
    e.addEventListener('click', (e) => {
        e.preventDefault()
        for (let i = 0; i < sections.length; i++) {
            if (e.target.innerText.split(' ')[0].toLowerCase() === sections[i].classList[0]) {
                sections[i].scrollIntoView({
                    block: 'start',
                    inline: 'nearest',
                    behavior: 'smooth'
                })
            }
        }
    })
})