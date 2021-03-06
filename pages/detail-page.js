function doesNotPassAllValidations(name, msg) {
  if (!name && !msg) {
    alert("You forgot to fill in your name and message!");
    return true;
  }
  if (!name) {
    alert("You forgot to fill in your name!");
    return true;
  }
  if (!msg) {
    alert("You forgot to fill in your message!");
    return true;
  }
  if (msg.length > 280) {
    alert("Your comment is too long");
    return true;
  }
  return false;
}

function firstLetterToUpperCase(text) {
  return text[0].toUpperCase() + text.slice(1);
}

// add event handler
function submitComment() {
  // gather data
  const inputField = document.getElementById("name");
  const name = inputField.value;
  const textAreaField = document.getElementById("msg");
  const msg = textAreaField.value;

  if (doesNotPassAllValidations(name, msg)) {
    return null;
  } else {
    // create the elements I need
    const comment = document.createElement("section");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    // Create structure to put the comments
    h3.innerHTML = `${firstLetterToUpperCase(name)} said:`;
    p.innerHTML = `${firstLetterToUpperCase(msg)}:`;
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
}
