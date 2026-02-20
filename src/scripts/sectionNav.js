/**
 * Gère le comportement sticky de la navigation des sections
 * - Masque la nav au scroll vers le bas
 * - Affiche la nav au scroll vers le haut
 * - Surligne la section active au clic
 * - Surligne automatiquement la section visible via IntersectionObserver
 */

export function initSectionNav() {
    let lastScrollTop = 0;
    const sectionNav = document.getElementById("section-nav");

    if (sectionNav) {
        // Gestion du scroll pour masquer/afficher la nav
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scroll vers le bas - masquer le nav
                sectionNav.classList.add("hidden");
            } else {
                // Scroll vers le haut - afficher le nav
                sectionNav.classList.remove("hidden");
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });

        // Gestion des clics pour mettre en évidence la section active
        const links = sectionNav.querySelectorAll(".section-link");
        links.forEach((link) => {
            link.addEventListener("click", () => {
                links.forEach((l) => l.classList.remove("active"));
                link.classList.add("active");
            });
        });

        // Observer pour surligner la section visible automatiquement
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        links.forEach((l) => l.classList.remove("active"));
                        const activeLink = sectionNav.querySelector(
                            `a[href="#${entry.target.id}"]`
                        );
                        if (activeLink) {
                            activeLink.classList.add("active");
                        }
                    }
                });
            },
            { threshold: 0.3 }
        );

        // Observer toutes les sections qui ont un lien correspondant dans la nav
        links.forEach((link) => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                const sectionId = href.substring(1);
                const section = document.getElementById(sectionId);
                if (section) {
                    observer.observe(section);
                }
            }
        });
    }
}
