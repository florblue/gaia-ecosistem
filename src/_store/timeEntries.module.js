import { timeEntriesService } from "../_services";
import { router } from "../_helpers";

// const currentData = JSON.parse(localStorage.getItem("user"));
// const currentData = [...state.user]
const state = {
  currentTimeEntry: {},
  timeEntries: [],
  totalTime: 0
}


const actions = {
  saveTimeEntry({ dispatch, commit, rootState }, timeEntrydata) {
    
    const timeEntry = {
      date: timeEntrydata.date,
      totalTime: timeEntrydata.totalTime,
      comment: timeEntrydata.comment,
      user: rootState.account.user.user
    };
    console.log('antes save ', timeEntry)
    timeEntriesService.addTimeEntry(timeEntry).then(
      timeEntry => {
        commit("timeEntrySuccess", timeEntry);
        commit("updateTotalTime", timeEntry);
        console.log("Time logged!");
        // dispatch("alert/success", "Time logges!");
      },
      error => {
        commit("timeEntryFailure", error);
        dispatch("alert/error", error, { root: true });
      }
    );
  },
  getUserTimeEntries({ dispatch, commit, rootState }) {
    timeEntriesService.getUserTimeEntries(rootState.account.user.user).then(
      timeEntriesList => {
        console.log(timeEntriesList.data);
        let totalTime = 0
        timeEntriesList.data.forEach(timeEntry => {
          totalTime += timeEntry.totalTime 
        });
        console.log('totalTime', totalTime)
        commit("timeEntriesListSuccess", timeEntriesList);
        commit("getTotalTime", totalTime);

      },
      error => {
        console.log('eerrorcito', error)
        commit("timeEntriesListFailure", error);
        dispatch("alert/error", error, { root: true });
      }
    );
  },

  deleteUserTimeEntry({ dispatch, commit}, timeEntry) {
    timeEntriesService.deleteTimeEntry(timeEntry).then(
      response => {
        console.log('time entry id post bbdd', timeEntry._id)
        commit("timeEntryDeleted", timeEntry);
        // console.log("timeEntryDeleted", timeEntry);
        // dispatch("alert/success", "Time logges!");
      },
      error => {
        commit("timeEntryFailure", error);
        dispatch("alert/error", error, { root: true });
      }
    );
  }
};

const mutations = {
  timeEntrySuccess(state, timeEntry) {
    // console.log(state.timeEntries.data)
    state.currentTimeEntry = {};
    state.timeEntries.data.push(timeEntry)
  },
  timeEntryDeleted(state, timeEntry) {
    state.currentTimeEntry = {};
    let index = state.timeEntries.data.indexOf(timeEntry);
    console.log('index of', index)
      state.timeEntries.data.splice(index, 1);
      state.totalTime -= timeEntry.totalTime;
  },
  timeEntriesListSuccess(state, timeEntryList) {
    state.timeEntries = timeEntryList;
  },
  getTotalTime(state, totalTime) {
    state.totalTime = totalTime;
  },
  updateTotalTime(state, timeEntry) {
    state.totalTime += timeEntry.totalTime;
  }
};

export const timeEntries = {
  namespaced: true,
  state,
  actions,
  mutations
};
