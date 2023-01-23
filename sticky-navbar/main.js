const navbarEl = document.querySelector('.navbar');
console.log(navbarEl.offsetHeight);
const bottomContainerEl = document.querySelector('.bottom-container');
console.log(bottomContainerEl.offsetTop);
console.log(848-80-50)
window.addEventListener('scroll', () => { 
    if (window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.add('active')
    }else {
        navbarEl.classList.remove('active')
    }
})