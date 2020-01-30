// add event handler
function submitComment() {
  // gather data and test if it is working (console.log)
  const inputField = document.getElementById("name");
  const name = inputField.value;
  console.log(name);
  const textAreaField = document.getElementById("msg");
  const msg = textAreaField.value;
  console.log(msg);

  // create the elements I need
  const comment = document.createElement("section");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  console.log("creating elements", comment, h3, p);

  // outputting the comments

  h3.innerHTML = `${name} said:`;
  p.innerHTML = `${msg}:`;
  comment.classList.add("comment");
  comment.appendChild(h3);
  comment.appendChild(p);
  console.log(comment);
}
