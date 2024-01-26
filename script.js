document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".scroll-section");

    const revealSection = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });

    sections.forEach(function (section) {
        sectionObserver.observe(section);
        section.classList.remove("visible");
    });
});

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeInExpo",
    duration: 950,

    delay: (el, i) => 70 * i,
});
