// --------------------Script do Scroll----------------------- //

window.addEventListener("scroll", function() {
    let header = document.querySelector('#header')
    header.classList.toggle('Scroll', window.scrollY > 0)
});

// --------------------Script do Scroll para o Topo----------------------- //

window.addEventListener("scroll", function() {
    let header = document.querySelector('#scrollTop')
    header.classList.toggle('Scroll', window.scrollY > 0)
});