const toggleButton = document.getElementsByClassName("toogle")[0];
const navbar = document.getElementsByClassName("navbar-links")[0];


toggleButton.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
});