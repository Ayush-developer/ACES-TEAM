const foodie = document.querySelector("#burger");
const navbars  = document.querySelector(".navbar-menu");
const clickers = document.querySelector("#button");

foodie.addEventListener("click", function(){
    navbars.classList.toggle("is-active");
     event.preventDefault();
});