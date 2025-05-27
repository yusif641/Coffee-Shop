const goToTopButton = document.querySelector('.go-footer');
const scrollTo = document.querySelector('.home');

const goToTop = (e) => {
    scrollTo.scrollIntoView({ 
        behavior: "smooth", 
        block: "start", 
        inline: "nearest" 
    })
}

goToTopButton.addEventListener('click', goToTop);