// --------------------Script do Scroll----------------------- //

window.addEventListener("scroll", function() {
    let header = document.querySelector('#header')
    header.classList.toggle('Scroll', window.scrollY > 0)
})