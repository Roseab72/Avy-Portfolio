const menuButton = document.getElementById("menu-button"); 
const navLinks = document.querySelector(".nav-links"); 
const image = document.querySelector(".parallax-image");

menuButton.addEventListener("click", () => { 
    navLinks.classList.toggle("active"); });

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    image.style.transform = `translateY(${scrollPosition * 0.15}px)`;
});