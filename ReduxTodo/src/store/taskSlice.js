import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const taskSlice = createSlice({
  name: "task-store",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        completed: action.payload.completed,
      });
    },
    removeTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    toggleCompleted: (state, action) => {
      let selectedTask = state.find((task) =>
        task.id === action.payload.id);
      selectedTask.completed = !selectedTask.completed; 
    },
  },
});

export const taskAction = taskSlice.actions;

export default taskSlice.reducer;