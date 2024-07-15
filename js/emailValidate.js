const emails = document.querySelectorAll('.email-input');
const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const validateEmail = (e) => {
    if (e.target.value.match(pattern)) {
        e.target.classList.remove('incorrect')
        e.target.classList.add('correct')
    } else if (e.target.value == "") {
        e.target.classList.remove('incorrect')
        e.target.classList.remove('correct')
    } else {
        e.target.classList.add('incorrect')
        e.target.classList.remove('correct')
    }
}

emails.forEach(el => {
    el.addEventListener('input', validateEmail)
})