const menuButton = document.getElementById("menu-button"); 
const navLinks = document.querySelector(".nav-links"); 
const image = document.querySelector(".parallax-image");

menuButton.addEventListener("click", () => { 
    navLinks.classList.toggle("active"); });

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const sectionPosition = image.parentElement.getBoundingClientRect().top + scrollPosition;
    const offset = (scrollPosition - sectionPosition) * 0.15;

    image.style.transform = `translateY(${offset}px)`;
});