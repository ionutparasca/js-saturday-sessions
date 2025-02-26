const taskForm = document.querySelector("#taskForm");
taskForm.addEventListener("submit", onTaskFormSubmit);

function onTaskFormSubmit(event) {
  event.preventDefault();
  const taskList = document.querySelector(".tasks");
  const taskinput = taskForm.querySelector("input");

  if (!taskinput.value) {
    alert("Compleaza cu taskul dorit");
    return;
  }
  const newItem = document.createElement("li");
  newItem.innerText = taskinput.value;
  newItem.classList.add("task");
  newItem.addEventListener("click", () => {
    newItem.remove();
  });
  taskList.append(newItem);
  taskinput.value = "";
}
