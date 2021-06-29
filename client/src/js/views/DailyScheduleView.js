class DailyScheduleView {
  _date = document.querySelector("#date");
  _taskTable = document.querySelector(".tasks");
  _dailyScheduleInputForm = document.querySelector(".form");

  render(data) {
    this._date.value = data.date;
    data.tasks.forEach((task) => {
      this._addTask(task.time.start, task.time.end, task.content);
    });
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  addHandlerAddTask(handler) {
    this._dailyScheduleInputForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target.elements;
      const startTime = form["time-start"].value;
      const endTime = form["time-end"].value;
      const content = form["task"].value;

      this._addTask(startTime, endTime, content);

      handler({ time: { start: startTime, end: endTime }, content });
    });
  }

  addHandlerRemoveTask(handler) {
    this._taskTable.addEventListener("click", (e) => {
      if (!e.target.classList.contains("delete-task")) return;

      const task = e.target.closest(".task");
      const [startTime, endTime] = task
        .querySelector(".task-time")
        .textContent.split(" ~ ");
      const content = task.querySelector(".task-content").textContent;

      handler({
        time: { start: startTime, end: endTime },
        content,
      });

      task.remove();
    });
  }

  addHandlerUpdateDate(handler) {
    this._date.addEventListener("change", (e) => {
      handler(e.target.value);
    });
  }

  addHandlerSave(handler) {
    document.querySelector(".save-schedule").addEventListener("click", (e) => {
      handler();
    });
  }

  _addTask(startTime, endTime, content) {
    this._taskTable.insertAdjacentElement(
      "beforeend",
      this._generateTask(startTime, endTime, content)
    );
  }

  _generateTask(startTime, endTime, content) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const taskTime = document.createElement("div");
    taskTime.classList.add("task-time");
    taskTime.textContent = `${startTime} ~ ${endTime}`;

    const taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskContent.textContent = content;

    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.textContent = "X";
    deleteTaskBtn.classList.add("delete-task");

    taskDiv.appendChild(taskTime);
    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(deleteTaskBtn);

    return taskDiv;
  }
}

export default new DailyScheduleView();
