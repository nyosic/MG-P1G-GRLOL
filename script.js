window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
    const gifDuration = 2000;

    setTimeout(() => {
        loadingScreen.style.opacity = 0;

        setTimeout(() => {
            loadingScreen.style.display = "none";
            mainContent.style.display = "block";
        }, 300);
    }, gifDuration);
});