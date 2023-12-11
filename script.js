const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//! button function
function addTask() {
  if (inputBox.value === "") {
    alert("Please add your text");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; //! to add x mark at the end of the line
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

//! click function to select the task
listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

//! storing in Session storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTaskData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTaskData();
