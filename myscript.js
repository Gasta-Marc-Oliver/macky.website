function validateInput() {
  let inputField = document.getElementById("name");
  let nameField = document.getElementById("comment");
  let submitBtn = document.getElementById("submit_button");
  if (inputField.value.trim().length > 0 && nameField.value.trim().length > 0) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
    submitBtn.style.color = "";
  }
}

let comments = [];

// Function to render comments
function renderComments(sortOrder = "asc") {
  const commentList = document.getElementById("comment-list");
  commentList.innerHTML = "";

  // Sort comments based on the selected order
  const sortedComments = comments.slice().sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  // Render sorted comments
  sortedComments.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.classList.add("comment");
    commentElement.innerHTML = `
      <h4>${comment.name}</h4>
      <p>${comment.text}</p>
      <small>${comment.date.toLocaleString()}</small>
    `;
    commentList.appendChild(commentElement);
  });
}

// Event listener for form submission
document.getElementById("comment-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("comment");

  // Create a new comment object
  const newComment = {
    name: nameInput.value,
    text: commentInput.value,
    date: new Date(),
  };

  // Add the new comment to the comments array
  comments.push(newComment);

  // Clear the input fields
  nameInput.value = "";
  commentInput.value = "";

  // Render the updated comments
  renderComments(document.getElementById("sort-order").value);
});

// Event listener for sort order change
document.getElementById("sort-order").addEventListener("change", () => {
  renderComments(document.getElementById("sort-order").value);
});

// Initial render of comments
renderComments();
