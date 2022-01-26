// Like

const requestLike = new XMLHttpRequest();
const onClickLike = (id) => {
  const post = document.querySelector(`#post-${id}`); // need to learn: event 일어난 button 자체 지정법
  let action;
  if (post.classList.contains("on")) {
    action = "minus";
  } else {
    action = "plus";
  }
  post.classList.toggle("on");

  const url = "/like/";
  requestLike.open("POST", url, true);
  requestLike.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  requestLike.send(JSON.stringify({ id: id, action: action }));
};

const likeHandleResponse = () => {
  if (requestLike.status < 400) {
    const { id, action } = JSON.parse(requestLike.response);
    const heart = document.querySelector(`#post-${id} .heart`);
    const num = document.querySelector(`#post-${id} .num`);
    let hrt;
    let cnt;

    if (action === "plus") {
      hrt = "💖";
      cnt = Number(num.innerText) + 1;
    } else {
      hrt = "🤍";
      cnt = Number(num.innerText) - 1;
    }
    heart.innerText = hrt;
    num.innerText = cnt;
  }
};

requestLike.onreadystatechange = () => {
  if (requestLike.readyState === XMLHttpRequest.DONE) {
    likeHandleResponse();
  }
};

// Write a comment

const forms = document.querySelectorAll("form");
forms.forEach((value) => {
  const id = Number(value.id.split("-")[1]);
  value.addEventListener("submit", (e) => {
    e.preventDefault(); // prevents reload, submits data but views.py does nothing
    writeComment(id);
  });
});

const requestWrite = new XMLHttpRequest();
const writeComment = (id) => {
  const form = document.querySelector(`#form-${id}`);
  const author = form.querySelector(".cform__author");
  const content = form.querySelector(".cform__content");

  const url = "/comment/";
  if (author.value && content.value) {
    // vaildty 검증 방법..?
    requestWrite.open("POST", url, true);
    requestWrite.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    requestWrite.send(
      JSON.stringify({ id: id, author: author.value, content: content.value })
    );
    author.value = null;
    content.value = null;
  }
};

const writeHandleResponse = () => {
  if (requestWrite.status < 400) {
    const { id, comment_id, author, content } = JSON.parse(
      requestWrite.response
    );
    const comments = document.querySelector(`#post-${id} .comments`);
    const comment = document.createElement("div");
    comment.classList.toggle("my-2");
    comment.classList.toggle(`comment-${comment_id}`);
    comment.innerHTML = `<span class="comment__author mx-3">${author}</span><span class="comment__content">${content}</span> <button class="btn btn-sm btn-danger" onclick="onClickDelete(${comment_id})">-</button>`;
    comments.append(comment);
  }
};

requestWrite.onreadystatechange = () => {
  if (requestWrite.readyState === XMLHttpRequest.DONE) {
    writeHandleResponse();
  }
};

// Delete a comment

const requestDelete = new XMLHttpRequest();
const onClickDelete = (id) => {
  const url = "/delete/";
  requestDelete.open("POST", url, true);
  requestDelete.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  requestDelete.send(JSON.stringify({ id: id }));
};

const deleteHandleResponse = () => {
  if (requestDelete.status < 400) {
    const { id } = JSON.parse(requestDelete.response);
    console.log(id);
    comment = document.querySelector(`.comment-${id}`);
    comment.remove();
  }
};

requestDelete.onreadystatechange = () => {
  if (requestDelete.readyState === XMLHttpRequest.DONE) {
    deleteHandleResponse();
  }
};
