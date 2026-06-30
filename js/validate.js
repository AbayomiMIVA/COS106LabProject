// --- CONTACT FORM VALIDATION SCRIPT ---
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("ContactForm");
    const successBanner = document.getElementById("successBanner");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        // Extract Form Input Value
        const nameValue = document.getElementById("contactName").value.trim();
        const emailValue = document.getElementById("contactEmail").value.trim();
        const phoneValue = document.getElementById("contactPhone").value.trim();
        const messageValue = document.getElementById("contactMessage").value.trim();

        // Validation Rules
        const syntaxEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const numbersOnlyRegex = /^\d+$/;

        // Reset display errors
        document.querySelectorAll(".validation-error-label").forEach(lbl => lbl.style.display = "none");
        successBanner.style.display = "none";

        let checkingPassed = true;

        // Validation Requirement checking
        if (!nameValue) {
            document.getElementById("nameError").style.display = "block";
            checkingPassed = false;
        }
        if (!emailValue || !syntaxEmailRegex.test(emailValue)) {
            document.getElementById("emailError").style.display = "block";
            checkingPassed = false;
        }
        if (!phoneValue || !numbersOnlyRegex.test(phoneValue)) {
            document.getElementById("phoneError").style.display = "block";
            checkingPassed = false;
        }
        if (!messageValue) {
            document.getElementById("messageError").style.display = "block";
            checkingPassed = false;
        }

        // Execute on successful validation parameters
        if (checkingPassed) {
            successBanner.style.display = "block";
            contactForm.reset();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    });
});