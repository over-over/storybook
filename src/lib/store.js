import { configureStore, createSlice } from "@reduxjs/toolkit";

const defaultTasks = [
  { id: "1", title: "learn hohoho", state: "TASK_INBOX" },
  { id: "2", title: "learn hihihihi", state: "TASK_INBOX" },
  { id: "3", title: "learn yey", state: "TASK_INBOX" },
];

const TaskBoxData = {
  tasks: defaultTasks,
  status: "idle",
  error: null,
};

const TasksSlice = createSlice({
  name: "taskbox",
  initialState: TaskBoxData,
});

export const { updateTaskState } = TasksSlice.actions;

const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
});

export default store;
