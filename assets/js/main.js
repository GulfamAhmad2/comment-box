const input = document.querySelector(".input"),
  posted = document.querySelector(".posted"),
  button = document.querySelector(".btn");

function comment() {
  commentValue = input.value;
  if (commentValue === "") {
    alert("Please write your openion");
  } else {
    posted.innerHTML += `
        <div class="posted-comment">
        <div class="left">
        <div class="paragraph">
        <span class"comments">${commentValue}</span>
        </div>
        <div class="comments-option">
        <div class="icons">
        <button class="like"><i class="uil uil-thumbs-up"></i></button>
        <button class="dislike"><i class="uil uil-thumbs-down"></i></button>
        <button class="reply-btn"><i class="uil uil-comment-alt-message"></i></button>
        </div>
        <div class="reply">
        <span class="reply-text"></span>
        <div class="reply-container">
        <input type="text" placeholder="Add Reply" class="input-reply">
        <button class="add-reply-btn">Reply</button>
        </div>
        </div>
        </div>
        </div>
        <div class="delete">
        <button class="del-btn">
        <i class="uil uil-trash-alt"></i>
        </button>
        </div>
        </div>
        `;
    let removeComments = document.querySelectorAll(".delete");
    let replyBtn = document.querySelectorAll(".reply-btn");
    let replySection = document.querySelectorAll(".reply");
    let replyInput = document.querySelectorAll(".input-reply");
    let addReplyBtn = document.querySelectorAll(".add-reply-btn");
    let replyText = document.querySelectorAll(".reply-text");

    function activeReply() {
      for (let replyitems of replySection) {
        replyitems.classList.toggle("active");
        console.log(replyitems);
      }
    }
    for (let items of replyBtn) {
      items.addEventListener("click", activeReply);
    }

    for (let btn of addReplyBtn) {
      btn.addEventListener("click", () => {
        for (let inputValue of replyInput) {
          replyValue = inputValue.value;
          if (replyValue === "") {
            alert("Please enter something");
          } else {
            for (let textItems of replyText) {
              textItems.innerHTML = `@ ${replyValue}`;
            }
          }
        }
      });
    }

    for (let remove of removeComments) {
      remove.addEventListener("click", function () {
        this.parentNode.remove();
      });
    }

  }
}

button.addEventListener("click", comment);
