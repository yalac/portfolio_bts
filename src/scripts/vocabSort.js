function normalizeText(value) {
    return String(value || "")
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function getListRoot() {
    return document.querySelector(".vocab-list");
}

function getEntries() {
    const root = getListRoot();
    if (!root) return [];

    const children = Array.from(root.children);
    const entries = [];

    for (let index = 0; index < children.length; index += 1) {
        const titleEl = children[index];
        if (!titleEl.matches("h2.vocabulaire-mot")) continue;

        const defEl = children[index + 1];
        if (!defEl || defEl.matches("h2.vocabulaire-mot")) continue;

        const sourceText = normalizeText(defEl.textContent);
        const sourceAnchor = defEl.querySelector("a[href]")?.getAttribute("href") || "";

        entries.push({
            titleEl,
            defEl,
            title: normalizeText(titleEl.textContent),
            length: normalizeText(defEl.textContent).length,
            source: normalizeText(sourceAnchor || sourceText),
        });

        index += 1;
    }

    return entries;
}

function render(entries) {
    const root = getListRoot();
    if (!root) return;

    const fragment = document.createDocumentFragment();
    entries.forEach((entry) => {
        fragment.appendChild(entry.titleEl);
        fragment.appendChild(entry.defEl);
    });

    root.appendChild(fragment);
}

function sortEntries(mode) {
    const entries = getEntries();
    if (!entries.length) return;

    const compareText = (a, b) => a.localeCompare(b, "fr", { sensitivity: "base" });

    if (mode === "alpha-desc") {
        entries.sort((a, b) => compareText(b.title, a.title));
    } else if (mode === "length-asc") {
        entries.sort((a, b) => a.length - b.length || compareText(a.title, b.title));
    } else if (mode === "length-desc") {
        entries.sort((a, b) => b.length - a.length || compareText(a.title, b.title));
    } else if (mode === "source") {
        entries.sort((a, b) => compareText(a.source, b.source) || compareText(a.title, b.title));
    } else {
        entries.sort((a, b) => compareText(a.title, b.title));
    }

    render(entries);
}

function initVocabSort() {
    const selector = document.getElementById("vocab-sort");
    if (!selector) return;

    const apply = () => sortEntries(selector.value || "alpha-asc");
    selector.addEventListener("change", apply);
    apply();
}

window.initVocabSort = initVocabSort;

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("vocab-sort")) {
        initVocabSort();
    }
});
