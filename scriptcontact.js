document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const messageField = document.getElementById("message");
    const charCount = document.getElementById("char-count");

    // Character count for the message field
    messageField.addEventListener("input", () => {
        const currentLength = messageField.value.length;
        charCount.textContent = `${currentLength}/500 characters`;
        if (currentLength > 500) {
            charCount.style.color = "red";
        } else {
            charCount.style.color = "inherit";
        }
    });

    // Submit handler with validation and loading animation
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            const formContainer = document.querySelector(".contact-container");
            formContainer.classList.add("shake");
            setTimeout(() => formContainer.classList.remove("shake"), 500);
            alert("Please fill in all fields!");
            return;
        }

        const loadingScreen = document.createElement("div");
        loadingScreen.className = "loading-screen";
        loadingScreen.innerHTML = `
            <div class="coffee-loader">
                <span>☕</span>
                <p>Sending...</p>
            </div>
        `;
        document.body.appendChild(loadingScreen);

        setTimeout(() => {
            loadingScreen.remove();
            alert("Thank you for your message! We will get back to you soon.");
            contactForm.reset();
        }, 3000);
    });
});