const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger?.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks?.classList.toggle("expanded");
    hamburger.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    // close when clicking outside the menu
    if (!navLinks?.contains(e.target) && !hamburger?.contains(e.target)) {
        navLinks?.classList.remove("expanded");
        hamburger?.classList.remove("open");
    }
});
