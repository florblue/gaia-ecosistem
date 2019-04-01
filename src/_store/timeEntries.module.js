import { timeEntriesService } from "../_services";
import { router } from "../_helpers";

const user = JSON.parse(localStorage.getItem("user"));
const state = user
  ? { status: { loggedIn: true }, user, timeEntries }
  : { status: {}, user: null };

const actions = {
  saveTimeEntry({ dispatch, commit }, timeEntry) {
    timeEntriesService.addTimeEntry(timeEntry).then(
      timeEntry => {
        commit("timeEntrySuccess", timeEntry);
        console.log("Time logged!");
        router.push("/");
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
    state = { currentTimeEntry: timeEntry };
  }
};

export const timeEntries = {
  namespaced: true,
  state,
  actions,
  mutations
};
