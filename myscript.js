function validate_input() {
  let input_field = document.getElementById("name_input");
  let comment_field = document.getElementById("comment_input");
  let submit_btn = document.getElementById("submit_btn");
  if (
    input_field.value.trim().length > 0 &&
    comment_field.value.trim().length > 0
  ) {
    submit_btn.disabled = false;
    submit_btn.classList.remove("disabled");
  } else {
    submit_btn.disabled = true;
    submit_btn.classList.add("disabled");
  }
}

let comments = [];

function render_comments(sort_order = "asc") {
  const comment_list = document.getElementById("comment-list");
  comment_list.innerHTML = "";

  const sorted_comments = comments.slice().sort((a, b) => {
    const date_a = new Date(a.date);
    const date_b = new Date(b.date);
    return sort_order === "asc" ? date_a - date_b : date_b - date_a;
  });

  sorted_comments.forEach((comment) => {
    const comment_element = document.createElement("div");
    comment_element.classList.add("comment");
    comment_element.innerHTML = `
      <h4>${comment.name}</h4>
      <p>${comment.text}</p>
      <small>${comment.date.toLocaleString()}</small>
    `;
    comment_list.appendChild(comment_element);
  });
}

document.getElementById("comment_form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name_input = document.getElementById("name_input");
  const comment_input = document.getElementById("comment_input");

  const new_comment = {
    name: name_input.value,
    text: comment_input.value,
    date: new Date(),
  };

  comments.push(new_comment);

  name_input.value = "";
  comment_input.value = "";

  render_comments(document.getElementById("sort_order").value);
});

document.getElementById("sort_order").addEventListener("change", () => {
  render_comments(document.getElementById("sort_order").value);
});

render_comments();
