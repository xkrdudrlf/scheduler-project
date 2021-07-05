import * as model from "./model";
import dailyScheduleView from "./views/DailyScheduleView";

const controlDailySchedule = () => {
  model.loadDailySchedule();
  dailyScheduleView.render(model.dailySchedule);
};

const controlAddTask = (task) => {
  model.addTask(task);
};

const controlRemoveTask = (task) => {
  model.removeTask(task);
};

const controlUpdateDate = (date) => {
  model.updateDate(date);
};

const controlSave = async () => {
  await model.save();
};

const init = function () {
  dailyScheduleView.addHandlerRender(controlDailySchedule);
  dailyScheduleView.addHandlerAddTask(controlAddTask);
  dailyScheduleView.addHandlerRemoveTask(controlRemoveTask);
  dailyScheduleView.addHandlerUpdateDate(controlUpdateDate);
  dailyScheduleView.addHandlerSave(controlSave);
};

init();
