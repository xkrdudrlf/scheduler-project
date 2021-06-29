export const dailySchedule = {
  date: "",
  tasks: [],
};

export const loadDailySchedule = () => {
  dailySchedule.date = "2021-06-29";

  [
    { time: { start: "08:00", end: "" }, content: "Wake up" },
    {
      time: { start: "08:00", end: "08:50" },
      content: "Breakfast & Shower",
    },
  ].forEach((task) => {
    dailySchedule.tasks.push(task);
  });
};

export const addTask = (task) => {
  dailySchedule.tasks.push(task);
  console.log(dailySchedule);
};

export const removeTask = (task) => {
  const i = dailySchedule.tasks.findIndex(
    (t) =>
      t.time.start === task.time.start &&
      t.time.end === task.time.end &&
      t.content === task.content
  );

  if (i < 0)
    return console.log(
      `Cannot find a task : "${task.start} ~ ${task.end}, ${task.content}"`
    );

  dailySchedule.tasks.splice(i, 1);
};

export const updateDate = (date) => {
  dailySchedule.date = date;
  console.log(dailySchedule);
};

export const save = () => {
  console.log("Sent dailySchedule Info to the backend server !!");
};
