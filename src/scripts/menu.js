const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger?.addEventListener("click", (e) => {
    e.stopPropagation();
    navLinks?.classList.toggle("expanded");
});

document.addEventListener("click", () => {
    navLinks?.classList.remove("expanded");
});
