const toggleButton = document.getElementsByClassName("toggle")[0];
const navbar = document.getElementsByClassName("navbar-links")[0];


toggleButton.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
});

