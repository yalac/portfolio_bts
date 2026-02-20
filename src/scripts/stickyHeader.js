/**
 * Gère le comportement sticky du header
 * Masque le header au scroll vers le bas
 * Affiche le header au scroll vers le haut
 */

export function initStickyHeader() {
    let lastScrollTop = 0;
    const header = document.getElementById("sticky-header");

    if (header) {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scroll vers le bas - masquer le header
                header.classList.add("hidden");
            } else {
                // Scroll vers le haut - afficher le header
                header.classList.remove("hidden");
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }
}
