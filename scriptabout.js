document.addEventListener("DOMContentLoaded", () => {
    // Smooth fade-in effect on scroll
    const aboutUsSection = document.querySelector("#about-us");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aboutUsSection.classList.add("fade-in");
            }
        });
    }, { threshold: 0.1 });
    observer.observe(aboutUsSection);

    // Highlight text on hover
    const aboutText = document.querySelectorAll("#about-us p");
    aboutText.forEach((text) => {
        text.addEventListener("mouseover", () => {
            text.classList.add("highlight");
        });
        text.addEventListener("mouseout", () => {
            text.classList.remove("highlight");
        });
    });
});
