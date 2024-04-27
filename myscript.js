document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("commentForm");
    let nameInput = document.getElementById("name");
    let commentInput = document.getElementById("comment");
    let submitButton = document.getElementById("submitButton");

    let checkFormFilled = () => {
        let isFormFilled = nameInput.value.trim() && commentInput.value.trim();
        submitButton.disabled = !isFormFilled;
        if (isFormFilled) {
            submitButton.style.cursor = "pointer";
        } else {
            submitButton.style.cursor = "not-allowed";
        }
    };

    nameInput.addEventListener("input", checkFormFilled);
    commentInput.addEventListener("input", checkFormFilled);

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
});
