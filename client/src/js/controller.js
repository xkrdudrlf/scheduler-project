const dailyScheduleInputForm = document.querySelector(".form");
const inputStartTime = document.querySelector("#time-start");
const inputEndTime = document.querySelector("#time-end");
const inputTask = document.querySelector("#task");
const taskTable = document.querySelector(".tasks");

dailyScheduleInputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

function addTask() {
  const startTime = inputStartTime.value;
  const endTime = inputEndTime.value;
  const task = inputTask.value;
  taskTable.insertAdjacentHTML(
    "beforeend",
    generateTask(startTime, endTime, task)
  );
}

function generateTask(startTime, endTime, task) {
  return `
    <div class="task">
      <div class="task-time">${startTime} ~ ${endTime}</div>
      <div class="task-content">${task}</div>
      <button class="delete-task">X</button>
    </div>
  `;
}
