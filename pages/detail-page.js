// add event handler
function submitComment() {
  // gather data
  const inputField = document.getElementById("name");
  const name = inputField.value;
  const textAreaField = document.getElementById("msg");
  const msg = textAreaField.value;

  // create the elements I need
  const comment = document.createElement("section");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");

  // Create structure to put the comments
  h3.innerHTML = `${name} said:`;
  p.innerHTML = `${msg}:`;
  comment.classList.add("comment");
  comment.appendChild(h3);
  comment.appendChild(p);

  //Display elements on the page
  const commentSection = document.getElementById("comments");
  commentSection.appendChild(comment);

  // reset form values
  inputField.value = null;
  textAreaField.value = null;
}
