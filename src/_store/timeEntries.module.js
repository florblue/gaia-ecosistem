import { timeEntriesService } from "../_services";
import { router } from "../_helpers";

const currentData = JSON.parse(localStorage.getItem("user"));
const state = {
  currentTimeEntry: {},
  timeEntries: []
};

const actions = {
  saveTimeEntry({ dispatch, commit }, timeEntrydata) {
    const timeEntry = {
      date: timeEntrydata.date,
      totalTime: timeEntrydata.totalTime,
      comment: timeEntrydata.comment,
      user: currentData.user
    };
    timeEntriesService.addTimeEntry(timeEntry).then(
      timeEntry => {
        commit("timeEntrySuccess", timeEntry);
        console.log("Time logged!");
        dispatch("alert/success", "Time logges!");
      },
      error => {
        commit("timeEntryFailure", error);
        dispatch("alert/error", error, { root: true });
      }
    );
  },
  getUserTimeEntries({ dispatch, commit }) {
    console.log(currentData.user);
    timeEntriesService.getUserTimeEntries(currentData.user).then(
      timeEntriesList => {
        console.log(timeEntriesList);
        commit("timeEntriesListSuccess", timeEntriesList);
      },
      error => {
        commit("timeEntriesListFailure", error);
        dispatch("alert/error", error, { root: true });
      }
    );
  }
};

const mutations = {
  timeEntrySuccess(state, timeEntry) {
    state.currentTimeEntry = timeEntry;
  },
  timeEntriesListSuccess(state, timeEntryList) {
    state.timeEntries = timeEntryList;
  }
};

export const timeEntries = {
  namespaced: true,
  state,
  actions,
  mutations
};
