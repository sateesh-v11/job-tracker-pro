import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
    },
    updateJob: (state, action) => {
      const index = state.jobs.findIndex((job) => job.id === action.payload.id);
      if (index !== -1) {
        state.jobs[index] = action.payload;
      }
    },
    clearJobs: (state) => {
      state.jobs = [];
    },
    importJobs: (state, action) => {
      state.jobs = [...state.jobs, ...action.payload];
    },
    setJobs: (state, action) => {
      state.jobs = action.payload;
    }
  },
});

export const { addJob, deleteJob, updateJob, clearJobs, importJobs,setJobs } = jobSlice.actions;
export default jobSlice.reducer;
