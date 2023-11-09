// --------------------Script do Scroll----------------------- //

window.addEventListener("scroll", function() {
    let header = document.querySelector('#header')
    header.classList.toggle('Scroll', window.scrollY > 0)
})

//----------------------- Script do Ver Mais----------------------- //

var button = document.getElementById("spaceRead");
var ReadMore = document.getElementById("ReadMore");

button.addEventListener("click", function() {

    // var ReadMore = document.getElementById("ReadMore");

    if(ReadMore.style.display === "none") {
        ReadMore.style.display = "block";
        button.textContent = "Ver Menos";
    } else {
        ReadMore.style.display = "none";
        button.textContent = "Ver Mais";
    }
});
