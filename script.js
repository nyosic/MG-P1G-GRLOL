window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
    const loadingGif = document.getElementById("loading-gif");
    const gifDuration = 2000; // Replace with your GIF's duration in milliseconds

    // Check if the loading screen has already been shown in this session
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
        // First visit: show the loading screen
        sessionStorage.setItem("hasVisited", "true");

        // Play the GIF and fade out the loading screen
        setTimeout(() => {
            loadingScreen.style.opacity = 0;

            setTimeout(() => {
                loadingScreen.style.display = "none";
                mainContent.style.display = "block";
            }, 150); // Matches CSS transition duration
        }, gifDuration);
    } else {
        // Not the first visit: skip the loading screen
        loadingScreen.style.display = "none";
        mainContent.style.display = "block";
    }
});
