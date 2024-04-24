document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("commentForm");
    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");
    const submitButton = document.getElementById("submitButton");

    const checkFormFilled = () => {
        // If both name and comment fields have values, enable the submit button
        const isFormFilled = nameInput.value.trim() && commentInput.value.trim();
        submitButton.disabled = !isFormFilled;
        if (isFormFilled) {
            submitButton.style.cursor = "pointer";
        } else {
            submitButton.style.cursor = "not-allowed";
        }
    };

    // Add event listeners to input fields to check for changes
    nameInput.addEventListener("input", checkFormFilled);
    commentInput.addEventListener("input", checkFormFilled);

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
});